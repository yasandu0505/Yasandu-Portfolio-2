import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-md">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Yasandu Imanjith. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/yasandu0505" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://linkedin.com/in/yasandu-imanjith-17b760278" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
         
        </div>
      </div>
    </footer>
  )
}
