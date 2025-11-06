import { data } from "@/lib/data";
import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Education() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            Academic History
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {data.education.map((edu, index) => (
            <div key={index}>
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-lg">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground">{edu.period}</p>
              </div>
              <p className="text-muted-foreground">{edu.institution}</p>
              <p className="text-sm text-muted-foreground mt-1">{edu.grade}</p>
            </div>
          ))}
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="font-headline flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            Certifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {data.certifications.map((cert, index) => (
            <div key={index}>
               <div className="flex justify-between items-baseline">
                <h3 className="font-semibold">{cert.name}</h3>
                <p className="text-sm text-muted-foreground text-right">{cert.period}</p>
              </div>
              <p className="text-muted-foreground">{cert.institution}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
