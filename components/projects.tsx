"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { GithubIcon, ExternalLinkIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { projectsData } from "@/lib/data"

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
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

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projectsData.map((project, index) => (
              <motion.div key={project.id} variants={item}>
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
