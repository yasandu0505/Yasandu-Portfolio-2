"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code2Icon, DatabaseIcon, LayoutIcon, ServerIcon, SettingsIcon } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: <LayoutIcon className="h-10 w-10 text-purple-500" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"],
  },
  {
    title: "Backend",
    icon: <ServerIcon className="h-10 w-10 text-purple-500" />,
    skills: ["Node.js", "Express", "Python", "Java", "RESTful APIs", "GO"],
  },
  {
    title: "Database",
    icon: <DatabaseIcon className="h-10 w-10 text-purple-500" />,
    skills: ["MongoDB", "SQL", "MySQL", "Firebase", "Supabase"],
  },
  {
    title: "DevOps",
    icon: <SettingsIcon className="h-10 w-10 text-purple-500" />,
    skills: ["Git", "Docker", "CI/CD", "Vercel"],
  },
  {
    title: "Other",
    icon: <Code2Icon className="h-10 w-10 text-purple-500" />,
    skills: ["Agile", "UI/UX", "Testing", "Problem Solving", "Team Collaboration"],
  },
]

export default function Skills() {
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
    <section id="skills" className="relative overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[30%] right-[10%] h-[20rem] w-[20rem] rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <Badge className="bg-purple-600 hover:bg-purple-700">Skills</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Expertise</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              A comprehensive set of skills I've developed throughout my journey
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {skillCategories.map((category, index) => (
              <motion.div key={category.title} variants={item}>
                <Card className="h-full overflow-hidden border-purple-100 transition-all duration-300 hover:border-purple-300 hover:shadow-md dark:border-purple-900/50 hover:dark:border-purple-800">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900/20">{category.icon}</div>
                      <h3 className="text-xl font-bold">{category.title}</h3>
                      <div className="flex flex-wrap justify-center gap-2">
                        {category.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="bg-background">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

