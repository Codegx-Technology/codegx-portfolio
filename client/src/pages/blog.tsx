import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { PageWrapper, PageSection } from "@/components/layouts/PageWrapper";
import { Link } from "wouter";
import { Head } from "@/components/head";
import { Heading1, Heading2, Heading3, Paragraph } from "@/components/ui/typography";
import { EnterpriseCard } from "@/components/ui/enterprise-card";
import { EnterpriseGrid } from "@/components/ui/enterprise-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  featured: boolean;
  content: string;
}

interface BlogPostsData {
  blogPosts: BlogPost[];
}

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Fetch blog posts data
  const { data, isLoading, error } = useQuery<BlogPostsData>({
    queryKey: ["/data/blogPosts.json"],
    staleTime: Infinity,
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Get all unique tags
  const allTags = data?.blogPosts
    ? Array.from(new Set(data.blogPosts.flatMap(post => post.tags)))
    : [];

  // Filter blog posts by search query and tag
  const filteredPosts = data?.blogPosts
    ? data.blogPosts.filter(post => {
        const matchesSearch = searchQuery === "" ||
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesTag = activeTag === null || post.tags.includes(activeTag);

        return matchesSearch && matchesTag;
      })
    : [];

  // Sort posts by date (newest first)
  const sortedPosts = [...(filteredPosts || [])].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Featured posts
  const featuredPosts = sortedPosts.filter(post => post.featured);

  // Regular posts (excluding featured)
  const regularPosts = sortedPosts.filter(post => !post.featured);

  return (
    <PageWrapper>
      <Head
        title="Blog | Astella AI"
        description="Insights, perspectives, and analysis on AI, blockchain, and emerging technologies from our team of experts."
      />

      <PageSection
        background="pattern"
        spacing="xl"
        className="relative overflow-hidden"
      >
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12 relative z-10"
        >
          <Heading1 className="mb-2 md:mb-3">Thought Leadership</Heading1>
          <Paragraph className="text-xs md:text-sm max-w-3xl mx-auto">
            Insights, perspectives, and analysis on AI, blockchain, and emerging technologies
            from our team of experts.
          </Paragraph>
        </motion.div>

          {/* Search and Filter */}
          <div className="mb-8 md:mb-10 relative z-10">
            <EnterpriseCard className="p-4 md:p-6 mb-4 md:mb-6 border-primary/20 shadow-lg">
              <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="flex-1 relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                    <i className="fas fa-search"></i>
                  </div>
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 py-2 md:py-3 text-xs md:text-sm border-primary/20 focus:border-primary focus:ring-primary"
                  />
                </div>
                <Button
                  variant={activeTag === null ? "default" : "outline"}
                  onClick={() => setActiveTag(null)}
                  className="whitespace-nowrap py-2 md:py-3 px-4 md:px-6 text-xs md:text-sm font-medium"
                >
                  <i className="fas fa-tag mr-2"></i> All Topics
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {allTags.map(tag => (
                  <Badge
                    key={tag}
                    variant={activeTag === tag ? "default" : "outline"}
                    className={`cursor-pointer px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-medium transition-all duration-200 ${
                      activeTag === tag
                        ? 'bg-primary text-white'
                        : 'hover:bg-primary/10 border-primary/20'
                    }`}
                    onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </EnterpriseCard>
          </div>

          {isLoading ? (
            <EnterpriseCard className="py-20 text-center border-dashed relative z-10">
              <div className="animate-spin w-16 h-16 border-4 border-primary border-t-transparent rounded-full mx-auto mb-6"></div>
              <Heading3 className="text-xl mb-2">Loading Articles</Heading3>
              <Paragraph className="text-muted-foreground">Please wait while we fetch the latest thought leadership content...</Paragraph>
            </EnterpriseCard>
          ) : error ? (
            <EnterpriseCard className="py-20 text-center border-red-200 dark:border-red-900/30 relative z-10">
              <div className="w-20 h-20 bg-red-100 dark:bg-red-900/20 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-exclamation-triangle text-3xl"></i>
              </div>
              <Heading3 className="text-red-500 mb-3">Error Loading Articles</Heading3>
              <Paragraph className="text-muted-foreground max-w-md mx-auto">
                We encountered an issue while loading the articles. Please try again later or contact our support team.
              </Paragraph>
            </EnterpriseCard>
          ) : filteredPosts.length === 0 ? (
            <EnterpriseCard className="py-20 text-center border-primary/20 relative z-10">
              <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-search text-3xl"></i>
              </div>
              <Heading3 className="mb-3">No Results Found</Heading3>
              <Paragraph className="text-muted-foreground max-w-md mx-auto mb-6">
                No articles found matching your search criteria. Try adjusting your filters or search terms.
              </Paragraph>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setActiveTag(null);
                }}
                className="px-6 py-2 border-primary/20 hover:bg-primary/10"
              >
                <i className="fas fa-times-circle mr-2"></i> Clear Filters
              </Button>
            </EnterpriseCard>
          ) : (
            <>
              {/* Featured Posts */}
              {featuredPosts.length > 0 && (
                <div className="mb-16 relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <i className="fas fa-star text-primary"></i>
                    </div>
                    <Heading2 className="text-2xl font-bold">Featured Articles</Heading2>
                  </div>
                  <EnterpriseGrid cols={2} gap="lg">
                    {featuredPosts.map((post) => (
                      <motion.div
                        key={post.slug}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Link href={`/blog/${post.slug}`}>
                          <a className="block group">
                            <EnterpriseCard className="overflow-hidden h-full border-primary/20 hover:border-primary transition-all duration-300 shadow-md hover:shadow-xl">
                              <div className="relative h-64 overflow-hidden">
                                <img
                                  src={post.image}
                                  alt={post.title}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/800x400?text=Blog+Post";
                                  }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                  <div className="p-6 text-white">
                                    <div className="flex items-center gap-2 mb-2">
                                      <Badge variant="secondary" className="bg-primary/80 text-white border-0">
                                        <i className="fas fa-star mr-1"></i> Featured
                                      </Badge>
                                      <span className="text-sm opacity-80">{formatDate(post.date)}</span>
                                      <span className="text-sm opacity-80">•</span>
                                      <span className="text-sm opacity-80">{post.readTime}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold">{post.title}</h3>
                                  </div>
                                </div>
                              </div>
                              <div className="p-6">
                                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                  {post.tags.map((tag, index) => (
                                    <Badge key={index} variant="outline" className="text-xs border-primary/20">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                                <div className="flex items-center justify-between border-t border-border pt-4 mt-4">
                                  <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                                      <i className="fas fa-user"></i>
                                    </div>
                                    <div>
                                      <div className="font-medium">{post.author}</div>
                                      <div className="text-sm text-muted-foreground">{post.authorRole}</div>
                                    </div>
                                  </div>
                                  <Button variant="ghost" size="sm" className="group-hover:bg-primary/10 group-hover:text-primary">
                                    Read More <i className="fas fa-arrow-right ml-2"></i>
                                  </Button>
                                </div>
                              </div>
                            </EnterpriseCard>
                          </a>
                        </Link>
                      </motion.div>
                    ))}
                  </EnterpriseGrid>
                </div>
              )}

              {/* Regular Posts */}
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <i className="fas fa-newspaper text-primary"></i>
                  </div>
                  <Heading2 className="text-2xl font-bold">All Articles</Heading2>
                </div>
                <EnterpriseGrid cols={3} gap="lg">
                  {regularPosts.map((post) => (
                    <motion.div
                      key={post.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="h-full"
                    >
                      <Link href={`/blog/${post.slug}`}>
                        <a className="block group h-full">
                          <EnterpriseCard className="overflow-hidden h-full border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-lg">
                            <div className="relative h-48 overflow-hidden">
                              <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x200?text=Blog+Post";
                                }}
                              />
                              <div className="absolute top-0 right-0 m-3">
                                <Badge variant="secondary" className="bg-black/50 backdrop-blur-sm text-white border-0 text-xs">
                                  {post.readTime}
                                </Badge>
                              </div>
                            </div>
                            <div className="p-6">
                              <div className="text-sm text-muted-foreground mb-2">
                                <i className="far fa-calendar-alt mr-2"></i>{formatDate(post.date)}
                              </div>
                              <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">{post.title}</h3>
                              <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {post.tags.slice(0, 2).map((tag, index) => (
                                  <Badge key={index} variant="outline" className="text-xs border-primary/20">
                                    {tag}
                                  </Badge>
                                ))}
                                {post.tags.length > 2 && (
                                  <Badge variant="outline" className="text-xs border-primary/20">
                                    +{post.tags.length - 2}
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
                                <div className="flex items-center">
                                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 text-xs">
                                    <i className="fas fa-user"></i>
                                  </div>
                                  <div className="text-sm font-medium">{post.author}</div>
                                </div>
                                <Button variant="ghost" size="sm" className="group-hover:bg-primary/10 group-hover:text-primary">
                                  Read <i className="fas fa-arrow-right ml-1"></i>
                                </Button>
                              </div>
                            </div>
                          </EnterpriseCard>
                        </a>
                      </Link>
                    </motion.div>
                  ))}
                </EnterpriseGrid>
              </div>
            </>
          )}
      </PageSection>
    </PageWrapper>
  );
}
