import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Layout } from "@/components/layout";
import { Link } from "wouter";
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
    <Layout>
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold font-inter mb-4">Thought Leadership</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights, perspectives, and analysis on AI, blockchain, and emerging technologies
              from our team of experts.
            </p>
          </motion.div>
          
          {/* Search and Filter */}
          <div className="mb-10">
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
          </div>
          
          {isLoading ? (
            <div className="text-center py-20">
              <div className="animate-spin w-10 h-10 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading articles...</p>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-red-500">Error loading articles. Please try again later.</p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
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
                <div className="mb-16">
                  <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                  </div>
                </div>
              )}
              
              {/* Regular Posts */}
              <div>
                <h2 className="text-2xl font-bold mb-6">All Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
}
