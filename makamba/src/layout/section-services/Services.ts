import {
  Code,
  MonitorSmartphone,
  ShieldCheck,
  Network,
  Wrench,
  Globe,
} from "lucide-react";

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: typeof Code; 
} 

export const services: Service[] = [
  {
    id: 1,
    title: "Desenvolvimento de Sites",
    icon: Code,
    description:"Criamos websites profissionais, modernos e responsivos para empresas e profissionais autônomos.",
  },
  {
    id: 2,
    title: "Manutenção de Equipamentos",
    icon: Wrench,
    description: "Realizamos diagnóstico, limpeza, reparo e otimização de computadores, servidores e redes.",
  },
  {
    id: 3,
    title: "Redes e Infraestrutura",
    icon: Network,
    description:"Planejamento, instalação e manutenção de redes locais, cabeamento estruturado e Wi-Fi empresarial.",
  },
  {
    id: 4,
    title: "Cibersegurança",
    icon: ShieldCheck,
    description: "Protegemos os dados e sistemas da sua empresa com políticas, backups, firewall e antivírus.",
  },
  {
    id: 5,
    title: "Desenvolvimento Mobile",
    icon: MonitorSmartphone,
    description:"Construímos apps sob medida para Android e iOS com foco em desempenho e usabilidade.",
  },
  {
    id: 6,
    title: "Consultoria e Suporte Técnico",
    icon: Globe,
    description: "Atendimento técnico rápido e consultoria especializada para sua infraestrutura de TI.",
  },
];
