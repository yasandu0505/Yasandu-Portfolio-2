"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeftIcon, ExternalLinkIcon, GithubIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { projectsData } from "@/lib/data"

export default function ProjectPage() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.slug) {
      const foundProject = projectsData.find((p) => p.id === params.slug)
      if (foundProject) {
        setProject(foundProject)
      } else {
        router.push("/")
      }
    }
    setLoading(false)
  }, [params.slug, router])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  if (!project) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <Navbar />
      <main className="container px-4 py-10 md:px-6 md:py-16">
        <Button variant="ghost" size="sm" className="mb-6 gap-2" onClick={() => router.back()}>
          <ArrowLeftIcon className="h-4 w-4" />
          Back to Projects
        </Button>

        <div className="grid gap-10 md:grid-cols-3 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{project.title}</h1>
                <p className="text-xl text-muted-foreground">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="relative aspect-video overflow-hidden rounded-lg border">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={1200}
                  height={675}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  {project.longDescription ||
                    `This is an extended description of the ${project.title} project. It includes more details about the project's goals, challenges, and solutions.`}
                </p>
                <p>
                  The project was built using {project.technologies.join(", ")}. It demonstrates my ability to work with
                  these technologies and solve complex problems.
                </p>
                <p>
                  The development process involved planning, designing, implementing, and testing the application to
                  ensure it meets the requirements and provides a good user experience.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {project.github && (
                  <Button asChild>
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="mr-2 h-4 w-4" />
                      View Source
                    </Link>
                  </Button>
                )}
                {project.demo && (
                  <Button variant="outline" asChild>
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLinkIcon className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold">Project Details</h2>
                    <Separator />
                  </div>

                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-1">
                      <div className="font-medium text-muted-foreground">Type:</div>
                      <div>{project.type || "Web Application"}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <div className="font-medium text-muted-foreground">Duration:</div>
                      <div>{project.duration || "3 months"}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <div className="font-medium text-muted-foreground">Role:</div>
                      <div>{project.role || "Full Stack Developer"}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <div className="font-medium text-muted-foreground">Year:</div>
                      <div>{project.year || new Date().getFullYear()}</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">Key Features</h3>
                    <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                      {(
                        project.features || [
                          "Responsive design for all devices",
                          "Modern UI/UX with intuitive navigation",
                          "Optimized performance and loading times",
                          "Secure authentication and data handling",
                          "Comprehensive error handling",
                        ]
                      ).map((feature: string, index: number) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-bold">More Projects</h3>
              <div className="grid gap-4">
                {projectsData
                  .filter((p) => p.id !== project.id)
                  .slice(0, 2)
                  .map((relatedProject) => (
                    <Card key={relatedProject.id} className="overflow-hidden">
                      <div className="relative aspect-video">
                        <Image
                          src={relatedProject.image || "/placeholder.svg"}
                          alt={relatedProject.title}
                          width={400}
                          height={225}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <div className="space-y-2">
                          <h4 className="font-medium">{relatedProject.title}</h4>
                          <Button variant="link" className="h-auto p-0" asChild>
                            <Link href={`/projects/${relatedProject.id}`}>View Project</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
