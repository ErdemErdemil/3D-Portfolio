import {
    DL,
    DA,
    LLM,
    ML,
    javascript,
    python,
    html,
    css,
    reactjs,
    java,
    c,
    nodejs,
    git,
    vestel,
    cbu,
    brain,
    FR,
    HPP,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Hakkında",
    },
    {
      id: "work",
      title: "Deneyim",
    },
    {
      id: "contact",
      title: "İletişim",
    },
  ];
  
  const services = [
    {
      title: "Makine Öğrenmesi",
      icon: ML,
    },
    {
      title: "Derin Öğrenme",
      icon: DL,
    },
    {
      title: "Veri Analizi",
      icon: DA,
    },
    {
      title: "Büyük Dil Modelleri",
      icon: LLM,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Yazılım Mühendisi Stajyeri",
      company_name: "Vestel",
      icon: vestel,
      iconBg: "#383E56",
      date: "Ağustos 2024 - Eylül 2024",
      points: [
        "Vestel'deki stajımda, Linux işletim sistemi üzerinde C ve Python dillerini kullanarak televizyonlar için arayüz ve menü scriptleri yazdım. Bu süreçte, televizyonların kullanıcı deneyimini geliştiren çözümler üretmeye odaklandım. Ayrıca, kod yönetimi için SVN kullanarak takımın çalışma düzenine katkı sağladım. Bu deneyim, hem yazılım geliştirme becerilerimi hem de takım içinde verimli bir şekilde çalışabilme yeteneğimi geliştirmemi sağladı.",
      ],
    },
    {
      title: "Yazılım Mühendisi Stajyeri",
      company_name: "Celal Bayar Üniversitesi",
      icon: cbu,
      iconBg: "#E6DEDD",
      date: "Haziran 2024 - Temmuz 2024",
      points: [
        "Celal Bayar Üniversitesi'nde PhiUSIIL projesi üzerinde çalıştım. Bu projede, phishing URL'lerini algılayan bir model geliştirdim. Modeli eğitmeden ve test etmeden önce, veriye ön işleme ve etiketleme işlemleri gerçekleştirdim. Bu proje, makine öğrenmesi, veri işleme gibi konularda çok değerli tecrübeler kazanmamı sağladı.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "Brain Tumor Analyzer",
      description:
        "Bu proje, beyin tümörü tespiti gibi kritik bir alanda derin öğrenme yöntemlerinin potansiyelini göstermektedir. Sağlık alanındaki görsel analizlerde bu tür modellerin kullanımının, erken teşhis ve tedavi süreçlerine önemli katkılar sağlayabileceği düşünülmektedir. Bu tür sistemler, insan hatasını minimize etme ve doğru teşhis sağlama konusunda önemli bir rol oynayabilir.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Kivy",
          color: "green-text-gradient",
        },
        {
          name: "Pytorch",
          color: "pink-text-gradient",
        },
      ],
      image: brain,
      source_code_link: "https://github.com/ErdemErdemil/Brain-Tumor-Prediction",
    },
    {
      name: "Face Recognition",
      description:
        "Bu proje, yüz tanıma teknolojilerini derin öğrenme ile birleştirerek güvenlik ve kimlik doğrulama alanlarında yüksek doğruluk ve güvenilirlik sağlamayı amaçlamaktadır. Sistem, insan hatasını en aza indirerek hızlı ve etkili sonuçlar sunarken, manuel süreçleri optimize etmek için güçlü bir araç olabilir. Proje, derin öğrenmenin gerçek dünya uygulamalarındaki potansiyelini göstermektedir.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "TensorFlow",
          color: "green-text-gradient",
        },
        {
          name: "Keras",
          color: "pink-text-gradient",
        },
      ],
      image: FR,
      source_code_link: "https://github.com/ErdemErdemil/Face_Recognition",
    },
    {
      name: "House Price Prediction",
      description:
        "Bu proje, ev fiyat tahmininde makine öğrenimi yöntemlerini kullanarak emlak piyasasında daha doğru ve güvenilir analizler yapılmasını amaçlamaktadır. Model, veriye dayalı tahminler sunarak karar alma süreçlerini iyileştirebilir ve yatırım risklerini minimize edebilir. Bu tür bir sistem, piyasa trendlerini öngörme ve müşterilere en uygun fiyatlandırma stratejilerini sunma konusunda önemli bir araç olabilir.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "BeautifulSoup",
          color: "green-text-gradient",
        },
        {
          name: "Streamlit",
          color: "pink-text-gradient",
        },
      ],
      image: HPP,
      source_code_link: "https://github.com/ErdemErdemil/MachineLearningHousePricePrediction",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };