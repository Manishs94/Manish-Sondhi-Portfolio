
import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { getAllProjects } from '@/utils/projectData';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'project' | 'experience' | 'section';
  url: string;
  category?: string;
}

const GlobalSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const searchContent = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const results: SearchResult[] = [];
    const projects = getAllProjects();

    // Search through projects
    projects.forEach(project => {
      if (
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (typeof project.category === 'string' ? project.category : project.category?.join(' ') || '').toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        results.push({
          id: `project-${project.id}`,
          title: project.title,
          description: project.description,
          type: 'project',
          url: `/project/${project.id}`,
          category: typeof project.category === 'string' ? project.category : project.category?.join(', ')
        });
      }
    });

    // Search through sections
    const sections = [
      { title: 'About Me', description: 'Learn about my background and experience', url: '/#about' },
      { title: 'Experience', description: 'My professional work experience', url: '/#experience' },
      { title: 'Education', description: 'My educational background', url: '/#education' },
      { title: 'Skills', description: 'Technical skills and expertise', url: '/#skills' },
      { title: 'Testimonials', description: 'Client feedback and recommendations', url: '/#testimonials' },
      { title: 'Contact', description: 'Get in touch for collaborations', url: '/#contact' }
    ];

    sections.forEach(section => {
      if (
        section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        section.description.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        results.push({
          id: `section-${section.title.toLowerCase().replace(' ', '-')}`,
          title: section.title,
          description: section.description,
          type: 'section',
          url: section.url
        });
      }
    });

    setSearchResults(results);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground bg-background border border-border rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
      >
        <Search className="w-4 h-4" />
        <span>Search...</span>
        <Badge variant="secondary" className="text-xs">⌘K</Badge>
      </button>

      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <Search className="w-5 h-5" />
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="p-0 max-w-2xl">
          <DialogTitle className="sr-only">
            Global Search
          </DialogTitle>
          <DialogDescription className="sr-only">
            Search through projects, sections, and content across the portfolio
          </DialogDescription>
          <Command className="rounded-lg border shadow-md">
            <CommandInput
              placeholder="Search projects, sections, and content..."
              value={query}
              onValueChange={(value) => {
                setQuery(value);
                searchContent(value);
              }}
              className="px-4 py-3"
            />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              {searchResults.length > 0 && (
                <>
                  <CommandGroup heading="Projects">
                    {searchResults
                      .filter(result => result.type === 'project')
                      .map((result) => (
                        <CommandItem key={result.id} asChild>
                          <Link
                            to={result.url}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 p-3 cursor-pointer"
                          >
                            <div className="flex-1">
                              <div className="font-medium">{result.title}</div>
                              <div className="text-sm text-muted-foreground">{result.description}</div>
                              {result.category && (
                                <Badge variant="outline" className="mt-1 text-xs">
                                  {result.category}
                                </Badge>
                              )}
                            </div>
                          </Link>
                        </CommandItem>
                      ))}
                  </CommandGroup>
                  
                  <CommandGroup heading="Sections">
                    {searchResults
                      .filter(result => result.type === 'section')
                      .map((result) => (
                        <CommandItem key={result.id} asChild>
                          <a
                            href={result.url}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 p-3 cursor-pointer"
                          >
                            <div className="flex-1">
                              <div className="font-medium">{result.title}</div>
                              <div className="text-sm text-muted-foreground">{result.description}</div>
                            </div>
                          </a>
                        </CommandItem>
                      ))}
                  </CommandGroup>
                </>
              )}
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GlobalSearch;
