interface IAdress {
  city: string;
  street: string;
  zipCode: number;
}

interface IEdu {
  degree: string;
  school: string;
  gradutionYear?: number;
}

interface IJob {
  company: string;
  startDate: Date;
  title: string;
}

interface IPerson {
  id: number;
  firstname: string;
  lastname: string;
  age: number;
  adress: IAdress;
  education: IEdu;
  jobs: IJob[];
}

const faruk: IPerson = {
  id: 123123,
  firstname: "Faruk",
  lastname: "Kaya",
  age: 35,
  adress: {
    city: "İstanbul",
    street: "4567 sokak",
    zipCode: 34410,
  },
  education: { degree: "56", school: "İTÜ", gradutionYear: 2020 },
  jobs: [
    {
      company: "X Şirket",
      startDate: new Date(),
      title: "Frontend",
    },
  ],
};

const konumBul = (adress: IAdress) => {
  console.log(adress.city);
};
