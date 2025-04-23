"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { GithubIcon, ExternalLinkIcon, ChevronDownIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { projectsData } from "@/lib/data"

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(6)

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 6)
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="relative overflow-hidden bg-muted/40 py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <Badge className="bg-purple-600 hover:bg-purple-700">Projects</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Work</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              A showcase of my recent projects and applications
            </p>
          </motion.div>

          <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectsData.slice(0, visibleProjects).map((project, index) => (
              <motion.div
                key={project.id}
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
              >
                <Card className="h-full overflow-hidden border-purple-100 transition-all duration-300 hover:border-purple-300 hover:shadow-md dark:border-purple-900/50 hover:dark:border-purple-800">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={340}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <p className="text-muted-foreground">{project.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="bg-background">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-6 pt-0">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/projects/${project.id}`}>View Details</Link>
                    </Button>
                    <div className="flex gap-2">
                      {project.github && (
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={project.github} target="_blank" rel="noopener noreferrer">
                            <GithubIcon className="h-4 w-4" />
                            <span className="sr-only">GitHub</span>
                          </Link>
                        </Button>
                      )}
                      {project.demo && (
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLinkIcon className="h-4 w-4" />
                            <span className="sr-only">Live Demo</span>
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {visibleProjects < projectsData.length && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6"
            >
              <Button onClick={loadMoreProjects} variant="outline" className="gap-2" size="lg">
                See More Projects
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
