import TemplateOne from "../templates/TemplateOne";
import TemplateTwo from "../templates/TemplateTwo";
import TemplateThree from "../templates/TemplateThree";
import TemplateFour from "../templates/TemplateFour";
import TemplateFive from "../templates/TemplateFive";
import TemplateSix from "../templates/TemplateSix";
import TemplateSeven from "../templates/TemplateSeven";

export const templateList = [
  {
    id: "templateOne",
    name: "Classic Simple",
    category: "Simple",
    component: TemplateOne,
    supportsPrimaryColor: false,
  },
  {
    id: "templateTwo",
    name: "Modern Clean",
    category: "Modern",
    component: TemplateTwo,
    supportsPrimaryColor: false,
  },
  {
    id: "templateThree",
    name: "Professional Corporate",
    category: "Professional",
    component: TemplateThree,
    supportsPrimaryColor: true,
  },
  {
    id: "templateFour",
    name: "Sidebar Modern",
    category: "Modern",
    component: TemplateFour,
    supportsPrimaryColor: true,
  },
  {
    id: "templateFive",
    name: "Minimal Elegant",
    category: "Professional",
    component: TemplateFive,
    supportsPrimaryColor: false,
  },
  {
    id: "templateSix",
    name: "ATS Classic",
    category: "Professional",
    component: TemplateSix,
    supportsPrimaryColor: false,
  },
  {
    id: "templateSeven",
    name: "Two Column",
    category: "Modern",
    component: TemplateSeven,
    supportsPrimaryColor: false,
  },
];