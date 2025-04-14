"use client"

// Import Image from next/image
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { experiences, personalInfo } from "@/data/portfolio-data"
import SkillsSection from "@/components/skills-section"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate backend developer with expertise in building scalable and efficient systems
          </p>
        </motion.div>

        {/* Profile Image and Long Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16"
        >
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-purple-500/30">
              <Image
                src={personalInfo.image || "/placeholder.svg"}
                alt={personalInfo.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Long Description */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {personalInfo.longDescription.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Experience</h3>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-purple-500 before:to-transparent">
              {experiences.map((experience, index) => (
                <div key={index} className="relative flex items-start md:justify-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 border-2 border-purple-500 shadow shrink-0 md:order-1 md:ml-3">
                    <span className="h-3 w-3 rounded-full bg-purple-500"></span>
                  </div>
                  <div className="ml-6 md:ml-0 md:mr-6 md:order-0 bg-card p-5 rounded-lg shadow-md border md:text-right">
                    <div className="font-semibold text-purple-600 dark:text-purple-400 mb-1">{experience.period}</div>
                    <div className="font-bold text-lg mb-1">{experience.role}</div>
                    <div className="font-medium text-muted-foreground mb-2">{experience.company}</div>
                    <p className="text-muted-foreground">{experience.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <h3 className="text-2xl font-bold mb-6">Skills Overview</h3>
            <Card className="flex-1">
              <CardHeader className="pb-2">
                <CardTitle>My Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  I specialize in backend development with expertise across multiple technologies and frameworks.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-purple-500 hover:bg-purple-600">Node.js</Badge>
                  <Badge className="bg-purple-500 hover:bg-purple-600">Spring Boot</Badge>
                  <Badge className="bg-purple-500 hover:bg-purple-600">PostgreSQL</Badge>
                  <Badge className="bg-purple-500 hover:bg-purple-600">MongoDB</Badge>
                  <Badge className="bg-purple-500 hover:bg-purple-600">Docker</Badge>
                  <Badge className="bg-purple-500 hover:bg-purple-600">Kubernetes</Badge>
                  <Badge className="bg-purple-500 hover:bg-purple-600">AWS</Badge>
                  <Badge className="bg-purple-500 hover:bg-purple-600">TypeScript</Badge>
                  <Badge className="bg-purple-500 hover:bg-purple-600">Python</Badge>
                  <Badge className="bg-purple-500 hover:bg-purple-600">Go</Badge>
                  <Badge className="bg-purple-500 hover:bg-purple-600">Microservices</Badge>
                  <Badge className="bg-purple-500 hover:bg-purple-600">API Design</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Interactive Skills Section */}
        <SkillsSection />
      </div>
    </section>
  )
}
