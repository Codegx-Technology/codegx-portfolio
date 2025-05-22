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
          className="text-center mb-12 relative z-10"
        >
          <Heading1 className="mb-4">Thought Leadership</Heading1>
          <Paragraph className="text-xl max-w-3xl mx-auto">
            Insights, perspectives, and analysis on AI, blockchain, and emerging technologies
            from our team of experts.
          </Paragraph>
        </motion.div>

          {/* Search and Filter */}
          <div className="mb-10 relative z-10">
            <EnterpriseCard className="p-6 mb-6">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                  />
                </div>
                <Button
                  variant={activeTag === null ? "default" : "outline"}
                  onClick={() => setActiveTag(null)}
                  className="whitespace-nowrap"
                >
                  All Topics
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {allTags.map(tag => (
                  <Badge
                    key={tag}
                    variant={activeTag === tag ? "default" : "outline"}
                    className={`cursor-pointer ${activeTag === tag ? 'bg-primary text-white' : 'hover:bg-primary/10'}`}
                    onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </EnterpriseCard>
          </div>

          {isLoading ? (
            <div className="text-center py-20 relative z-10">
              <div className="animate-spin w-10 h-10 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
              <Paragraph className="text-muted-foreground">Loading articles...</Paragraph>
            </div>
          ) : error ? (
            <div className="text-center py-20 relative z-10">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-exclamation-triangle text-2xl"></i>
              </div>
              <Heading3 className="text-red-500 mb-2">Error Loading Data</Heading3>
              <Paragraph className="text-muted-foreground">Unable to load articles. Please try again later.</Paragraph>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20 relative z-10">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-search text-2xl"></i>
              </div>
              <Heading3 className="mb-2">No Results Found</Heading3>
              <Paragraph className="text-muted-foreground mb-4">No articles found matching your criteria.</Paragraph>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setActiveTag(null);
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <>
              {/* Featured Posts */}
              {featuredPosts.length > 0 && (
                <div className="mb-16 relative z-10">
                  <Heading2 className="text-2xl mb-6">Featured Articles</Heading2>
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
                            <div className="bg-card rounded-lg overflow-hidden border border-border shadow-md hover:shadow-xl transition-all duration-300 h-full">
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
                                      <Badge variant="secondary" className="bg-primary/80 text-white">
                                        Featured
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
                                    <Badge key={index} variant="outline" className="text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                                <div className="flex items-center justify-between">
                                  <div>
                                    <div className="font-medium">{post.author}</div>
                                    <div className="text-sm text-muted-foreground">{post.authorRole}</div>
                                  </div>
                                  <Button variant="ghost" size="sm" className="group-hover:bg-primary/10 group-hover:text-primary">
                                    Read More <i className="fas fa-arrow-right ml-2"></i>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </a>
                        </Link>
                      </motion.div>
                    ))}
                  </EnterpriseGrid>
                </div>
              )}

              {/* Regular Posts */}
              <div className="relative z-10">
                <Heading2 className="text-2xl mb-6">All Articles</Heading2>
                <EnterpriseGrid cols={3} gap="lg">
                  {regularPosts.map((post) => (
                    <motion.div
                      key={post.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Link href={`/blog/${post.slug}`}>
                        <a className="block group">
                          <div className="bg-card rounded-lg overflow-hidden border border-border shadow-md hover:shadow-xl transition-all duration-300 h-full">
                            <div className="relative h-48 overflow-hidden">
                              <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x200?text=Blog+Post";
                                }}
                              />
                            </div>
                            <div className="p-6">
                              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                <span>{formatDate(post.date)}</span>
                                <span>•</span>
                                <span>{post.readTime}</span>
                              </div>
                              <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                              <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {post.tags.slice(0, 2).map((tag, index) => (
                                  <Badge key={index} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                                {post.tags.length > 2 && (
                                  <Badge variant="outline" className="text-xs">
                                    +{post.tags.length - 2}
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center justify-between mt-auto pt-2">
                                <div className="text-sm">
                                  <div className="font-medium">{post.author}</div>
                                </div>
                                <Button variant="ghost" size="sm" className="group-hover:bg-primary/10 group-hover:text-primary">
                                  Read <i className="fas fa-arrow-right ml-1"></i>
                                </Button>
                              </div>
                            </div>
                          </div>
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
