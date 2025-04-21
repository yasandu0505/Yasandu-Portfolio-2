"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { GraduationCapIcon, BriefcaseIcon } from "lucide-react"


export default function About() {

  const experienceData = [
    {
      role: "Software Engineer Intern",
      company: "VVH Solutions",
      period: "2024(MAY) - 2024(AUG)",
      description:
        "Worked on developing and maintaining web applications (MERN Stack, Laravel), collaborating with senior developers on various projects.",
    },
  ]

  const educationData = [
    {
      degree: "BSc. (Hons) in Computer Science",
      institution: "University of Westminster - IIT SriLanka",
      period: "2023(SEP) - Present",
    },
    {
      degree: "Foundation Certificate in Higher Education",
      institution: "Informatics Institute of Technology",
      period: "2023(JAN) - 2023(AUG)",
    },
    {
      degree: "GCE O/L - English Medium",
      institution: "Royal College",
      period: "A7, B1, C1",
    },
  ]

  return (
    <section id="about" className="relative overflow-hidden bg-muted/40 py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
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
              
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2">
                <BriefcaseIcon className="h-5 w-5 text-purple-500" />
                <h3 className="text-xl font-bold">Experience</h3>
              </div>
              <div className="space-y-3">
                {experienceData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="border-l-2 border-purple-200 pl-4"
                  >
                    <h4 className="font-medium">{item.role}</h4>
                    <p className="text-sm text-muted-foreground">{item.company}</p>
                    <p className="text-xs text-muted-foreground">{item.period}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2">
                <GraduationCapIcon className="h-5 w-5 text-purple-500" />
                <h3 className="text-xl font-bold">Education</h3>
              </div>
              <div className="space-y-3">
                {educationData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="border-l-2 border-purple-200 pl-4"
                  >
                    <h4 className="font-medium">{item.degree}</h4>
                    <p className="text-sm text-muted-foreground">{item.institution}</p>
                    <p className="text-xs text-muted-foreground">{item.period}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Experience Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
                className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2"
              >
                <div className="rounded-lg border bg-card p-4 shadow-sm">
                  <div className="flex items-center gap-2">
                    <GraduationCapIcon className="h-5 w-5 text-purple-500" />
                    <h3 className="font-medium">Education</h3>
                  </div>
                  <p className="mt-1 text-2xl font-bold">3+</p>
                  <p className="text-xs text-muted-foreground">Years in higher education</p>
                </div>
                <div className="rounded-lg border bg-card p-4 shadow-sm">
                  <div className="flex items-center gap-2">
                    <BriefcaseIcon className="h-5 w-5 text-purple-500" />
                    <h3 className="font-medium">Projects</h3>
                  </div>
                  <p className="mt-1 text-2xl font-bold">10+</p>
                  <p className="text-xs text-muted-foreground">Completed projects</p>
                </div>
              </motion.div>

              {/* Profile Image with decorative elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-lg border bg-background p-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent" />
                <Image
                  src="/my.JPG?height=600&width=600"
                  alt="Profile"
                  width={600}
                  height={600}
                  className="h-full w-full rounded-md object-cover"
                />

                {/* Decorative elements */}
                <div className="absolute -bottom-2 -right-2 -z-10 h-full w-full rounded-lg border border-purple-200 bg-muted" />
                <div className="absolute -bottom-4 -right-4 -z-20 h-full w-full rounded-lg border border-purple-200 bg-muted" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
