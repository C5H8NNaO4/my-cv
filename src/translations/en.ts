const en = (await import('@/data/bio/en.md?raw')).default;
const translation = {
  translation: {
    'at the': 'at',
    at: 'at',
    'https://justmycv.com/': 'https://justmycv.com/en',
    'Grow together': 'In Future',
    'Recent experience': 'Recent',
    'Professional experience': 'Professional',
    'Hobby experience': 'Hobby',
    'Part of my stack': 'Part of my stack',
    Contact: 'Contact',
    eMail: 'E-Mail',
    Portfolio: 'Portfolio ({{from}} - {{to}})',
    "This is what I'm looking to work with":
      "This is what I'm looking to be working with.",
    'Bonus points for AWS or PSQL': 'Bonus points for AWS or PSQL.',
    description: en,
    'descriptions.maxon': `A modern website for the maxon company to showcase and sell their products. A world-wide digital presence using state of art technology to power the website. Coremedia as CMS and Salesforce as commerce engine ensure a scalable backend infrastructure. Next.js and React provide a modern headless frontend.`,
    'descriptions.react-server': `An open source framework that let's you use TSX components on the backend. This allows to rapidly prototype sophisticated full-stack services using Reacts principles from the frontend on the backend.`,
    'descriptions.lists': `A simple productivity app to showcase what you can build with React Server.`,
    'descriptions.reflect': (
      await import('@/data/descriptions/reflect/en.md?raw')
    ).default,
    'descriptions.books': (await import('@/data/descriptions/books/en.md?raw'))
      .default,
    'descriptions.learnings': (
      await import('@/data/descriptions/learnings/en.md?raw')
    ).default,
    'descriptions.mycv': (await import('@/data/descriptions/mycv/en.md?raw'))
      .default,
    'descriptions.contact':
      'Feel free to contact me using any of the available channels.',
    'descriptions.marketing': 'Find out how to profit from my experience.',
    'sub.marketing': 'At 85% productivity.',
    'achievements.compiler':
      'The first time my compiler compiled itself was a revelation. The first time it compiled jQuery was a delight.',
    'achievements.sticky':
      'Sticky scrollable headers require JavaScript but are easy to implement in React.',
    'achievements.framework':
      'Properly launching and marketing a product is a huge effort and requires continous and consistent work to achieve results.',
    'achievements.mediumdata':
      'Analyzing hundreds of millions disjoint data points requires careful planning, data architecture and intermediate SQL skills.',
    'achievements.senior':
      'Working together with other senior developers in the field, I can confidently say that I have reached around the same level of knowledge on modern web development than other seniors with an experience of 10-15 years.',
  },
};

export default translation;
