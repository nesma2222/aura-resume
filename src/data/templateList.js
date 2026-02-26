import TemplateOne from "../templates/TemplateOne";
import TemplateTwo from "../templates/TemplateTwo";
import TemplateThree from "../Templates/TemplateThree";
import TemplateFour from "../templates/TemplateFour";
import TemplateFive from "../templates/TemplateFive";

export const templateList = [
  {
    id: "templateOne",
    name: "Classic Simple",
    component: TemplateOne,
  },
  {
    id: "templateTwo",
    name: "Modern Clean",
    component: TemplateTwo,
  },
  {
    id: "templateThree",
    name: "Professional Corporate",
    component: TemplateThree,
  },
    {
    id: "templateFour",
    name: "Sidebar Modern",
    category: "Modern",
    component: TemplateFour,
  },
  {
    id: "templateFive",
    name: "Minimal Elegant",
    category: "Professional",
    component: TemplateFive,
  },
];
