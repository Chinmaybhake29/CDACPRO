export interface Employee {
    id: number;
    name: string;
    position: string;
    department: string;
    email: string;
    phone: string;
    joinDate: string;
    imageUrl: string;
  }
  
  export const mockEmployees: Employee[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Senior Software Engineer",
      department: "Engineering",
      email: "sarah.johnson@company.com",
      phone: "(555) 123-4567",
      joinDate: "2021-03-15",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Product Manager",
      department: "Product",
      email: "michael.chen@company.com",
      phone: "(555) 234-5678",
      joinDate: "2020-06-01",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "UX Designer",
      department: "Design",
      email: "emily.rodriguez@company.com",
      phone: "(555) 345-6789",
      joinDate: "2022-01-10",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ];