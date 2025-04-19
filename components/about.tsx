"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-muted/40 py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="space-y-2">
              <Badge className="bg-purple-600 hover:bg-purple-700">About Me</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Software Engineer & Problem Solver
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                I'm a passionate software engineer undergraduate with a focus on building innovative and user-friendly
                applications.
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                My journey in software development started with a curiosity about how digital products work. This
                curiosity evolved into a passion for creating elegant solutions to complex problems.
              </p>
              <p>
                I specialize in full-stack development, with expertise in modern frameworks and technologies. I'm
                constantly learning and exploring new tools to enhance my skills and deliver better results.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-lg border bg-background p-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent" />
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Profile"
                width={600}
                height={600}
                className="h-full w-full rounded-md object-cover"
              />

              <div className="absolute -bottom-2 -right-2 -z-10 h-full w-full rounded-lg border border-purple-200 bg-muted" />
              <div className="absolute -bottom-4 -right-4 -z-20 h-full w-full rounded-lg border border-purple-200 bg-muted" />

              <Card className="absolute -bottom-6 -left-6 max-w-[200px] border-purple-200 bg-background/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <h3 className="font-medium">Experience</h3>
                    <div className="grid grid-cols-2 gap-1 text-sm">
                      <div className="font-medium text-muted-foreground">Education:</div>
                      <div>BSc in CS</div>
                      <div className="font-medium text-muted-foreground">Projects:</div>
                      <div>15+</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
