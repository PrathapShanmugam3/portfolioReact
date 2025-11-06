import { data } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.skills.map((skillCategory) => (
        <Card key={skillCategory.category} className="flex flex-col">
          <CardHeader>
            <CardTitle className="font-headline text-xl">{skillCategory.category}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="flex flex-wrap gap-2">
              {skillCategory.technologies.map((tech) => (
                <Badge key={tech.name} variant="secondary" className="py-1 px-3 text-sm">
                  {tech.icon && <tech.icon className="h-4 w-4 mr-2" />}
                  {tech.name}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
