// =====================================================
// AUTHENTIC CAMBRIDGE-STYLE PROMPTS (expanded)
// =====================================================
const PROMPTS = {
  gt: {
    full: [
      {
        id: "gt-full-1",
        label: "Heating problem + Community service",
        t1: {
          tone: "Formal",
          text: `You should spend about 20 minutes on this task.

You are renting a flat through an agency. There is a serious problem with the heating system.

Write a letter to the agency. In your letter:
• describe the problem and how long it has lasted
• explain how it is affecting you
• request action and a clear timeline

Write at least 150 words.

You do NOT need to write any addresses.
Begin your letter as follows:

Dear Sir or Madam,`
        },
        t2: {
          text: `You should spend about 40 minutes on this task.

Write about the following topic:

Some people believe that unpaid community service should be a compulsory part of high school programmes.
To what extent do you agree or disagree?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
        }
      },
      {
        id: "gt-full-2",
        label: "Hotel complaint + Work from home",
        t1: {
          tone: "Formal",
          text: `You should spend about 20 minutes on this task.

You recently stayed at a hotel and experienced several problems with the service and facilities.

Write a letter to the hotel manager. In your letter:
• describe the problems you experienced
• explain how these problems affected your stay
• say what you would like the manager to do about the situation

Write at least 150 words.

You do NOT need to write any addresses.
Begin your letter as follows:

Dear Sir or Madam,`
        },
        t2: {
          text: `You should spend about 40 minutes on this task.

Write about the following topic:

More and more people are choosing to work from home rather than travel to an office every day.
What are the advantages and disadvantages of this trend for both employees and employers?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
        }
      },
      {
        id: "gt-full-3",
        label: "Neighbour noise + Crime increase",
        t1: {
          tone: "Semi-formal",
          text: `You should spend about 20 minutes on this task.

You live in a flat and have been having problems with noise from your upstairs neighbours for the past two months.

Write a letter to the building manager. In your letter:
• describe the problems
• explain how they are affecting you
• suggest what the manager should do

Write at least 150 words.

You do NOT need to write any addresses.
Begin your letter as follows:

Dear Mr / Ms … ,`
        },
        t2: {
          text: `You should spend about 40 minutes on this task.

Write about the following topic:

In many countries the amount of crime is increasing.
What do you think are the main causes of crime?
What measures can be taken to reduce crime?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
        }
      },
      {
        id: "gt-full-4",
        label: "Job application + City living",
        t1: {
          tone: "Formal",
          text: `You should spend about 20 minutes on this task.

You have seen an advertisement for a part-time job that you are interested in.

Write a letter to the company. In your letter:
• introduce yourself and explain why you are writing
• describe your relevant skills and experience
• say why you would be suitable for the job and when you could start

Write at least 150 words.

You do NOT need to write any addresses.
Begin your letter as follows:

Dear Sir or Madam,`
        },
        t2: {
          text: `You should spend about 40 minutes on this task.

Write about the following topic:

An increasing number of people are moving from rural areas to live in large cities.
What problems does this cause?
What solutions can you suggest?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
        }
      },
      {
        id: "gt-full-5",
        label: "Library complaint + Online shopping",
        t1: {
          tone: "Formal",
          text: `You should spend about 20 minutes on this task.

You regularly use your local public library, but you have noticed several problems with the facilities and service.

Write a letter to the library manager. In your letter:
• describe the problems you have experienced
• explain how these problems affect library users
• suggest what improvements should be made

Write at least 150 words.

You do NOT need to write any addresses.
Begin your letter as follows:

Dear Sir or Madam,`
        },
        t2: {
          text: `You should spend about 40 minutes on this task.

Write about the following topic:

Online shopping is becoming more popular than shopping in traditional stores.
Do the advantages of this trend outweigh the disadvantages?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
        }
      },
      {
        id: "gt-full-6",
        label: "Course request + Public transport",
        t1: {
          tone: "Semi-formal",
          text: `You should spend about 20 minutes on this task.

You work in a company and want to take a short training course that will help your career.

Write a letter to your manager. In your letter:
• describe the course and why you want to take it
• explain how it will benefit the company
• say how much time you will need and when you would like to do it

Write at least 150 words.

You do NOT need to write any addresses.
Begin your letter as follows:

Dear … ,`
        },
        t2: {
          text: `You should spend about 40 minutes on this task.

Write about the following topic:

In many cities the use of private cars is increasing and this is causing many problems.
What are some of these problems?
What measures can governments take to encourage people to use public transport more?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
        }
      },
      {
        id: "gt-full-7",
        label: "Friend visit + Social media",
        t1: {
          tone: "Informal",
          text: `You should spend about 20 minutes on this task.

A friend from another country is coming to visit you for one week next month.

Write a letter to your friend. In your letter:
• suggest some activities you can do together
• recommend places to visit in your area
• give advice about what to bring and the weather

Write at least 150 words.

You do NOT need to write any addresses.
Begin your letter as follows:

Dear … ,`
        },
        t2: {
          text: `You should spend about 40 minutes on this task.

Write about the following topic:

The increasing use of social media among teenagers is having a negative impact on their mental health and real-life relationships.
What are the causes of this problem and what solutions can you suggest?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
        }
      },
      {
        id: "gt-full-8",
        label: "Library membership + Education costs",
        t1: {
          tone: "Formal",
          text: `You should spend about 20 minutes on this task.

You would like to become a member of a local library and want to ask for information about membership.

Write a letter to the library manager. In your letter:
• explain why you want to join
• ask about membership fees and opening hours
• mention any facilities you would like to use

Write at least 150 words.

You do NOT need to write any addresses.
Begin your letter as follows:

Dear Sir or Madam,`
        },
        t2: {
          text: `You should spend about 40 minutes on this task.

Write about the following topic:

Some people think that education should be free for everyone, while others believe students should pay for their own education.
Discuss both views and give your own opinion.

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
        }
      },
      {
        id: "gt-full-9",
        label: "Apartment inspection + Climate change",
        t1: {
          tone: "Semi-formal",
          text: `You should spend about 20 minutes on this task.

You are renting an apartment and want to report a problem that was noticed during an inspection.

Write a letter to the landlord. In your letter:
• describe the problem clearly
• explain when you noticed it
• say what you would like the landlord to do

Write at least 150 words.

You do NOT need to write any addresses.
Begin your letter as follows:

Dear Mr / Ms … ,`
        },
        t2: {
          text: `You should spend about 40 minutes on this task.

Write about the following topic:

Climate change is one of the biggest challenges facing the world today.
What are the main causes of climate change and what can individuals do to reduce its effects?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
        }
      },
      {
        id: "gt-full-10",
        label: "Bank card issue + Healthy lifestyle",
        t1: {
          tone: "Formal",
          text: `You should spend about 20 minutes on this task.

You have had a problem with your bank card and want to ask the bank for help.

Write a letter to the bank manager. In your letter:
• describe the problem
• explain how it affected you
• say what you would like the bank to do

Write at least 150 words.

You do NOT need to write any addresses.
Begin your letter as follows:

Dear Sir or Madam,`
        },
        t2: {
          text: `You should spend about 40 minutes on this task.

Write about the following topic:

Many people find it difficult to maintain a healthy lifestyle.
What are the reasons for this and what can be done to encourage healthier habits?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
        }
      },
      {
        id: "gt-full-11",
        label: "Sports centre membership + Remote learning",
        t1: {
          tone: "Informal",
          text: `You should spend about 20 minutes on this task.

You are considering joining a sports centre and want more information before you sign up.

Write a letter to the centre manager. In your letter:
• ask about membership options
• enquire about classes and facilities
• ask about the opening times and prices

Write at least 150 words.

You do NOT need to write any addresses.
Begin your letter as follows:

Dear … ,`
        },
        t2: {
          text: `You should spend about 40 minutes on this task.

Write about the following topic:

Remote learning has become more common in recent years.
Do the advantages of online education outweigh the disadvantages?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
        }
      }
    ],
    t1: [
      {
        id: "gt-t1-1",
        label: "Heating problem (formal letter)",
        tone: "Formal",
        text: `You should spend about 20 minutes on this task.

You are renting a flat through an agency. There is a serious problem with the heating system.

Write a letter to the agency. In your letter:
• describe the problem and how long it has lasted
• explain how it is affecting you
• request action and a clear timeline

Write at least 150 words.

You do NOT need to write any addresses.
Begin your letter as follows:

Dear Sir or Madam,`
      },
      {
        id: "gt-t1-2",
        label: "Hotel complaint (formal letter)",
        tone: "Formal",
        text: `You should spend about 20 minutes on this task.

You recently stayed at a hotel and experienced several problems with the service and facilities.

Write a letter to the hotel manager. In your letter:
• describe the problems you experienced
• explain how these problems affected your stay
• say what you would like the manager to do

Write at least 150 words.

You do NOT need to write any addresses.
Begin your letter as follows:

Dear Sir or Madam,`
      },
      {
        id: "gt-t1-3",
        label: "Neighbour noise (semi-formal)",
        tone: "Semi-formal",
        text: `You should spend about 20 minutes on this task.

You live in a flat and have been having problems with noise from your upstairs neighbours for the past two months.

Write a letter to the building manager. In your letter:
• describe the problems
• explain how they are affecting you
• suggest what the manager should do

Write at least 150 words.

You do NOT need to write any addresses.
Begin your letter as follows:

Dear Mr / Ms … ,`
      },
      {
        id: "gt-t1-4",
        label: "Friend invitation (informal)",
        tone: "Informal",
        text: `You should spend about 20 minutes on this task.

A friend from another country is coming to visit you for one week next month.

Write a letter to your friend. In your letter:
• suggest some activities you can do together
• recommend places to visit in your area
• give advice about what to bring and the weather

Write at least 150 words.

You do NOT need to write any addresses.
Begin your letter as follows:

Dear … ,`
      },
      {
        id: "gt-t1-5",
        label: "Training course request (semi-formal)",
        tone: "Semi-formal",
        text: `You should spend about 20 minutes on this task.

You work in a company and want to take a short training course that will help your career.

Write a letter to your manager. In your letter:
• describe the course and why you want to take it
• explain how it will benefit the company
• say how much time you will need and when you would like to do it

Write at least 150 words.

You do NOT need to write any addresses.
Begin your letter as follows:

Dear … ,`
      },
      {
        id: "gt-t1-6",
        label: "Library complaint (formal)",
        tone: "Formal",
        text: `You should spend about 20 minutes on this task.

You regularly use your local public library, but you have noticed several problems with the facilities and service.

Write a letter to the library manager. In your letter:
• describe the problems you have experienced
• explain how these problems affect library users
• suggest what improvements should be made

Write at least 150 words.

You do NOT need to write any addresses.
Begin your letter as follows:

Dear Sir or Madam,`
      },
      {
        id: "gt-t1-7",
        label: "Lost item at sports centre",
        tone: "Formal",
        text: `You should spend about 20 minutes on this task.

You left a valuable item at a sports centre and when you went back it was not there.

Write a letter to the manager of the sports centre. In your letter:
• describe the item and where you left it
• explain why the item is important to you
• say what you would like the manager to do

Write at least 150 words.

You do NOT need to write any addresses.
Begin your letter as follows:

Dear Sir or Madam,`
      }
    ],
    t2: [
      {
        id: "gt-t2-1",
        label: "Community service (Opinion)",
        text: `You should spend about 40 minutes on this task.

Write about the following topic:

Some people believe that unpaid community service should be a compulsory part of high school programmes.
To what extent do you agree or disagree?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
      },
      {
        id: "gt-t2-2",
        label: "Work from home (Advantages/Disadvantages)",
        text: `You should spend about 40 minutes on this task.

Write about the following topic:

More and more people are choosing to work from home rather than travel to an office every day.
What are the advantages and disadvantages of this trend for both employees and employers?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
      },
      {
        id: "gt-t2-3",
        label: "Crime increase (Problem/Solution)",
        text: `You should spend about 40 minutes on this task.

Write about the following topic:

In many countries the amount of crime is increasing.
What do you think are the main causes of crime?
What measures can be taken to reduce crime?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
      },
      {
        id: "gt-t2-4",
        label: "City living (Problem/Solution)",
        text: `You should spend about 40 minutes on this task.

Write about the following topic:

An increasing number of people are moving from rural areas to live in large cities.
What problems does this cause?
What solutions can you suggest?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
      },
      {
        id: "gt-t2-5",
        label: "Online shopping (Advantages outweigh?)",
        text: `You should spend about 40 minutes on this task.

Write about the following topic:

Online shopping is becoming more popular than shopping in traditional stores.
Do the advantages of this trend outweigh the disadvantages?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
      },
      {
        id: "gt-t2-6",
        label: "Public transport (Problem/Solution)",
        text: `You should spend about 40 minutes on this task.

Write about the following topic:

In many cities the use of private cars is increasing and this is causing many problems.
What are some of these problems?
What measures can governments take to encourage people to use public transport more?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
      },
      {
        id: "gt-t2-7",
        label: "Social media (Causes + Solutions)",
        text: `You should spend about 40 minutes on this task.

Write about the following topic:

The increasing use of social media among teenagers is having a negative impact on their mental health and real-life relationships.
What are the causes of this problem and what solutions can you suggest?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
      },
      {
        id: "gt-t2-8",
        label: "Older people in work (Discussion)",
        text: `You should spend about 40 minutes on this task.

Write about the following topic:

Some people think that older people should be required to retire at a certain age.
Others believe that people should be allowed to work for as long as they want.
Discuss both views and give your own opinion.

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
      }
    ]
  },

  ac: {
    full: [
      {
        id: "ac-full-1",
        label: "Electronic devices + Community service",
        t1: {
          tone: "Academic",
          text: `You should spend about 20 minutes on this task.

The line graph shows the percentage of households in a European country that owned four different electronic devices (television, computer, smartphone and tablet) between 2000 and 2020.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

Write at least 150 words.

(Typical trend: television ownership remained high and relatively stable; computer ownership rose steadily; smartphone ownership increased dramatically after 2010; tablet ownership grew more slowly and remained the lowest.)`
        },
        t2: {
          text: `You should spend about 40 minutes on this task.

Write about the following topic:

Some people believe that unpaid community service should be a compulsory part of high school programmes.
To what extent do you agree or disagree?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
        }
      },
      {
        id: "ac-full-2",
        label: "Renewable energy + Work from home",
        t1: {
          tone: "Academic",
          text: `You should spend about 20 minutes on this task.

The bar chart compares the amount of electricity generated from five renewable sources (solar, wind, hydro, biomass and geothermal) in four different countries in 2024.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

Write at least 150 words.`
        },
        t2: {
          text: `You should spend about 40 minutes on this task.

Write about the following topic:

More and more people are choosing to work from home rather than travel to an office every day.
What are the advantages and disadvantages of this trend for both employees and employers?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
        }
      },
      {
        id: "ac-full-3",
        label: "Energy pie charts + Crime",
        t1: {
          tone: "Academic",
          text: `You should spend about 20 minutes on this task.

The pie charts below show the proportion of energy produced from different sources in a country in 2005 and 2025.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

Write at least 150 words.

(Typical pattern: coal and oil declined significantly; natural gas stayed relatively stable; renewables and nuclear increased.)`
        },
        t2: {
          text: `You should spend about 40 minutes on this task.

Write about the following topic:

In many countries the amount of crime is increasing.
What do you think are the main causes of crime?
What measures can be taken to reduce crime?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
        }
      },
      {
        id: "ac-full-4",
        label: "Campus map + City living",
        t1: {
          tone: "Academic",
          text: `You should spend about 20 minutes on this task.

The two maps below show a university campus in 2005 and the same campus in 2025 after development.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

Write at least 150 words.

(Typical changes: new buildings, relocated car parks, more green space, sports facilities added, some old buildings demolished.)`
        },
        t2: {
          text: `You should spend about 40 minutes on this task.

Write about the following topic:

An increasing number of people are moving from rural areas to live in large cities.
What problems does this cause?
What solutions can you suggest?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
        }
      },
      {
        id: "ac-full-5",
        label: "Plastic recycling process + Social media",
        t1: {
          tone: "Academic",
          text: `You should spend about 20 minutes on this task.

The diagram shows the process of recycling plastic bottles into new products.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

Write at least 150 words.`
        },
        t2: {
          text: `You should spend about 40 minutes on this task.

Write about the following topic:

The increasing use of social media among teenagers is having a negative impact on their mental health and real-life relationships.
What are the causes of this problem and what solutions can you suggest?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
        }
      },
      {
        id: "ac-full-6",
        label: "Tourism table + Online shopping",
        t1: {
          tone: "Academic",
          text: `You should spend about 20 minutes on this task.

The table provides information about the number of visitors (in thousands) to five tourist attractions in a city over a three-year period.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

Write at least 150 words.`
        },
        t2: {
          text: `You should spend about 40 minutes on this task.

Write about the following topic:

Online shopping is becoming more popular than shopping in traditional stores.
Do the advantages of this trend outweigh the disadvantages?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
        }
      },
      {
        id: "ac-full-7",
        label: "Water usage chart + Digital education",
        t1: {
          tone: "Academic",
          text: `You should spend about 20 minutes on this task.

The line graph shows the amount of water used per household in a city over a ten-year period.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

Write at least 150 words.`
        },
        t2: {
          text: `You should spend about 40 minutes on this task.

Write about the following topic:

Digital technology has changed the way students learn.
What are the benefits and drawbacks of this development?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
        }
      },
      {
        id: "ac-full-8",
        label: "Traffic maps + Urban green spaces",
        t1: {
          tone: "Academic",
          text: `You should spend about 20 minutes on this task.

The two maps show a town centre before and after improvements to road systems and public spaces.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

Write at least 150 words.`
        },
        t2: {
          text: `You should spend about 40 minutes on this task.

Write about the following topic:

Many cities are trying to create more green spaces for residents.
Why is this important and what can governments do to achieve it?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
        }
      },
      {
        id: "ac-full-9",
        label: "Employment pie chart + Career choices",
        t1: {
          tone: "Academic",
          text: `You should spend about 20 minutes on this task.

The pie charts compare the distribution of employment in a country across different sectors in 2010 and 2020.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

Write at least 150 words.`
        },
        t2: {
          text: `You should spend about 40 minutes on this task.

Write about the following topic:

Young people often choose careers based on salary rather than personal interest.
Is this a positive or negative trend?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
        }
      },
      {
        id: "ac-full-10",
        label: "Coffee shop process + Public transport",
        t1: {
          tone: "Academic",
          text: `You should spend about 20 minutes on this task.

The diagram illustrates the process of making coffee from beans to the final drink.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

Write at least 150 words.`
        },
        t2: {
          text: `You should spend about 40 minutes on this task.

Write about the following topic:

Public transport systems in many cities are overcrowded and inefficient.
What are the main reasons for this and how can it be improved?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
        }
      }
    ],
    t1: [
      {
        id: "ac-t1-1",
        label: "Line graph – electronic devices",
        tone: "Academic",
        text: `You should spend about 20 minutes on this task.

The line graph shows the percentage of households in a European country that owned four different electronic devices (television, computer, smartphone and tablet) between 2000 and 2020.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

Write at least 150 words.`
      },
      {
        id: "ac-t1-2",
        label: "Bar chart – renewable energy",
        tone: "Academic",
        text: `You should spend about 20 minutes on this task.

The bar chart compares the amount of electricity generated from five renewable sources (solar, wind, hydro, biomass and geothermal) in four different countries in 2024.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

Write at least 150 words.`
      },
      {
        id: "ac-t1-3",
        label: "Pie charts – energy sources",
        tone: "Academic",
        text: `You should spend about 20 minutes on this task.

The pie charts below show the proportion of energy produced from different sources in a country in 2005 and 2025.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

Write at least 150 words.`
      },
      {
        id: "ac-t1-4",
        label: "Maps – university campus",
        tone: "Academic",
        text: `You should spend about 20 minutes on this task.

The two maps below show a university campus in 2005 and the same campus in 2025 after development.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

Write at least 150 words.`
      },
      {
        id: "ac-t1-5",
        label: "Process – plastic recycling",
        tone: "Academic",
        text: `You should spend about 20 minutes on this task.

The diagram shows the process of recycling plastic bottles into new products.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

Write at least 150 words.`
      },
      {
        id: "ac-t1-6",
        label: "Table – tourist attractions",
        tone: "Academic",
        text: `You should spend about 20 minutes on this task.

The table provides information about the number of visitors (in thousands) to five tourist attractions in a city over a three-year period.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

Write at least 150 words.`
      },
      {
        id: "ac-t1-7",
        label: "Mixed – employment + unemployment",
        tone: "Academic",
        text: `You should spend about 20 minutes on this task.

The bar chart and line graph show the number of people employed in different sectors and the unemployment rate in a country between 2010 and 2025.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

Write at least 150 words.`
      }
    ],
    t2: [
      {
        id: "ac-t2-1",
        label: "Community service (Opinion)",
        text: `You should spend about 40 minutes on this task.

Write about the following topic:

Some people believe that unpaid community service should be a compulsory part of high school programmes.
To what extent do you agree or disagree?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
      },
      {
        id: "ac-t2-2",
        label: "Work from home (Advantages/Disadvantages)",
        text: `You should spend about 40 minutes on this task.

Write about the following topic:

More and more people are choosing to work from home rather than travel to an office every day.
What are the advantages and disadvantages of this trend for both employees and employers?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
      },
      {
        id: "ac-t2-3",
        label: "Crime increase (Problem/Solution)",
        text: `You should spend about 40 minutes on this task.

Write about the following topic:

In many countries the amount of crime is increasing.
What do you think are the main causes of crime?
What measures can be taken to reduce crime?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
      },
      {
        id: "ac-t2-4",
        label: "City living (Problem/Solution)",
        text: `You should spend about 40 minutes on this task.

Write about the following topic:

An increasing number of people are moving from rural areas to live in large cities.
What problems does this cause?
What solutions can you suggest?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
      },
      {
        id: "ac-t2-5",
        label: "Online shopping (Advantages outweigh?)",
        text: `You should spend about 40 minutes on this task.

Write about the following topic:

Online shopping is becoming more popular than shopping in traditional stores.
Do the advantages of this trend outweigh the disadvantages?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
      },
      {
        id: "ac-t2-6",
        label: "Public transport (Problem/Solution)",
        text: `You should spend about 40 minutes on this task.

Write about the following topic:

In many cities the use of private cars is increasing and this is causing many problems.
What are some of these problems?
What measures can governments take to encourage people to use public transport more?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
      },
      {
        id: "ac-t2-7",
        label: "Social media (Causes + Solutions)",
        text: `You should spend about 40 minutes on this task.

Write about the following topic:

The increasing use of social media among teenagers is having a negative impact on their mental health and real-life relationships.
What are the causes of this problem and what solutions can you suggest?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
      },
      {
        id: "ac-t2-8",
        label: "Older people in work (Discussion)",
        text: `You should spend about 40 minutes on this task.

Write about the following topic:

Some people think that older people should be required to retire at a certain age.
Others believe that people should be allowed to work for as long as they want.
Discuss both views and give your own opinion.

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
      }
    ]
  }
};

// ========== STATE ==========
let currentModule = null;
let currentMode = "full";
let currentPromptIndex = 0;
let timers = { 1: null, 2: null };
let remaining = { 1: 20 * 60, 2: 40 * 60 };
let running = { 1: false, 2: false };

// ========== MODULE SELECTION ==========
function selectModule(mod) {
  currentModule = mod;
  document.getElementById("moduleChoice").style.display = "none";
  document.getElementById("dashboard").style.display = "block";
  document.getElementById("actionBar").style.display = "flex";

  const badge = document.getElementById("headerBadge");
  badge.classList.remove("hidden", "gt", "ac");
  badge.classList.add(mod);
  badge.textContent = mod === "gt" ? "GENERAL TRAINING" : "ACADEMIC";

  document.getElementById("btnChangeModule").classList.remove("hidden");

  // Build mode bar
  const modeBar = document.getElementById("modeBar");
  modeBar.innerHTML = `
    <button class="mode-btn active" data-mode="full">Full Mock (Task 1 + 2)</button>
    <button class="mode-btn" data-mode="t1">Task 1 only</button>
    <button class="mode-btn" data-mode="t2">Task 2 only</button>
    <button class="mode-btn" data-mode="feedback">Feedback only</button>
  `;
  modeBar.querySelectorAll(".mode-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      modeBar.querySelectorAll(".mode-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentMode = btn.dataset.mode;
      currentPromptIndex = 0;
      loadSession();
    });
  });

  currentMode = "full";
  currentPromptIndex = 0;
  loadSession();
}

function goBackToModuleChoice() {
  if (confirm("Leave current session and choose module again?")) {
    clearInterval(timers[1]);
    clearInterval(timers[2]);
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("actionBar").style.display = "none";
    document.getElementById("moduleChoice").style.display = "block";
    document.getElementById("headerBadge").classList.add("hidden");
    document.getElementById("btnChangeModule").classList.add("hidden");
    currentModule = null;
  }
}

// ========== LOAD SESSION ==========
function loadSession() {
  const isFeedback = currentMode === "feedback";
  document.getElementById("task1Card").classList.toggle("hidden", isFeedback || currentMode === "t2");
  document.getElementById("task2Card").classList.toggle("hidden", isFeedback || currentMode === "t1");
  document.getElementById("feedbackCard").classList.toggle("hidden", !isFeedback);
  document.getElementById("promptRow").classList.toggle("hidden", isFeedback);

  // Populate dropdown
  const select = document.getElementById("promptSelect");
  select.innerHTML = "";

  if (!isFeedback) {
    const list = PROMPTS[currentModule][currentMode] || [];
    list.forEach((p, i) => {
      const opt = document.createElement("option");
      opt.value = i;
      opt.textContent = p.label;
      if (i === currentPromptIndex) opt.selected = true;
      select.appendChild(opt);
    });
  }

  // Fill content
  if (currentMode === "full") {
    const p = PROMPTS[currentModule].full[currentPromptIndex];
    fillTask1(p.t1);
    fillTask2(p.t2);
  } else if (currentMode === "t1") {
    const p = PROMPTS[currentModule].t1[currentPromptIndex];
    fillTask1(p);
  } else if (currentMode === "t2") {
    const p = PROMPTS[currentModule].t2[currentPromptIndex];
    fillTask2(p);
  }

  // Reset writing areas & timers
  document.getElementById("t1Answer").value = "";
  document.getElementById("t2Answer").value = "";
  document.getElementById("feedbackText").value = "";
  resetTimer(1);
  resetTimer(2);
  updateWordCount(1);
  updateWordCount(2);

  const btn = document.getElementById("mainActionBtn");
  btn.innerHTML = isFeedback
    ? "📋 Copy Feedback Request for Grok"
    : "📋 Copy Full Submission for Grok";
}

function onPromptChange() {
  currentPromptIndex = parseInt(document.getElementById("promptSelect").value, 10);
  loadSession();
}

function fillTask1(data) {
  document.getElementById("t1Prompt").textContent = data.text;
  document.getElementById("t1Tone").textContent = "Tone / Style: " + (data.tone || "Formal");
  const badge = document.getElementById("t1Badge");
  badge.textContent = currentModule === "gt" ? "General Training" : "Academic";
  badge.className = "badge " + currentModule;
}

function fillTask2(data) {
  document.getElementById("t2Prompt").textContent = data.text;
}

// ========== TIMERS ==========
function formatTime(sec) {
  const m = Math.floor(sec / 60).toString().padStart(2, "0");
  const s = (sec % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function updateTimerDisplay(task) {
  const el = document.getElementById(`t${task}Timer`);
  el.textContent = formatTime(remaining[task]);
  el.classList.remove("warning", "danger");
  if (remaining[task] <= 60) el.classList.add("danger");
  else if (remaining[task] <= 180) el.classList.add("warning");
}

function toggleTimer(task) {
  if (running[task]) {
    clearInterval(timers[task]);
    running[task] = false;
    document.getElementById(`t${task}Play`).textContent = "▶";
  } else {
    running[task] = true;
    document.getElementById(`t${task}Play`).textContent = "⏸";
    timers[task] = setInterval(() => {
      if (remaining[task] > 0) {
        remaining[task]--;
        updateTimerDisplay(task);
      } else {
        clearInterval(timers[task]);
        running[task] = false;
        document.getElementById(`t${task}Play`).textContent = "▶";
        showToast(`Task ${task} time is up!`);
      }
    }, 1000);
  }
}

function resetTimer(task) {
  clearInterval(timers[task]);
  running[task] = false;
  remaining[task] = task === 1 ? 20 * 60 : 40 * 60;
  updateTimerDisplay(task);
  document.getElementById(`t${task}Play`).textContent = "▶";
}

// ========== WORD COUNT ==========
function updateWordCount(task) {
  const text = document.getElementById(`t${task}Answer`).value.trim();
  const words = text ? text.split(/\s+/).length : 0;
  const el = document.getElementById(`t${task}Count`);
  const min = task === 1 ? 150 : 250;
  el.textContent = `${words} words`;
  el.classList.remove("ok", "low");
  if (words >= min) el.classList.add("ok");
  else if (words > 0) el.classList.add("low");
}

// ========== COPY ==========
function showToast(msg = "Copied to clipboard!") {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2200);
}

function copyForGrok() {
  let message = "";

  if (currentMode === "feedback") {
    const text = document.getElementById("feedbackText").value.trim();
    if (!text) { showToast("Please paste your writing first"); return; }
    message = `Please give me full IELTS Writing feedback on the following answer(s).

Use the four official criteria, give band estimates, provide Band 8–9 model answers, and a priority action plan.

---
${text}
---`;
  } else {
    const t1 = document.getElementById("t1Answer").value.trim();
    const t2 = document.getElementById("t2Answer").value.trim();
    if (!t1 && !t2) { showToast("Write at least one answer first"); return; }

    const modName = currentModule === "gt" ? "General Training" : "Academic";
    message = `Here is my full ${modName} Writing mock. Please give full four-criteria feedback, band estimates, Band 8–9 model answers, and a priority action plan.

`;
    if (t1) message += `**WRITING TASK 1**\n${t1}\n\n`;
    if (t2) message += `**WRITING TASK 2**\n${t2}\n`;
  }

  navigator.clipboard.writeText(message).then(() => {
    showToast("✅ Ready! Paste into Grok Build now");
  }).catch(() => {
    const ta = document.createElement("textarea");
    ta.value = message;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    showToast("✅ Copied");
  });
}

function copyPromptOnly() {
  let text = "";
  if (currentMode === "feedback") {
    text = "Please give me full IELTS Writing feedback on the following answer(s).";
  } else if (currentMode === "full") {
    const p = PROMPTS[currentModule].full[currentPromptIndex];
    text = "TASK 1:\n" + p.t1.text + "\n\nTASK 2:\n" + p.t2.text;
  } else if (currentMode === "t1") {
    text = PROMPTS[currentModule].t1[currentPromptIndex].text;
  } else {
    text = PROMPTS[currentModule].t2[currentPromptIndex].text;
  }
  navigator.clipboard.writeText(text).then(() => showToast("Prompt copied"));
}

function resetSession() {
  if (confirm("Clear answers and reset timers?")) {
    document.getElementById("t1Answer").value = "";
    document.getElementById("t2Answer").value = "";
    document.getElementById("feedbackText").value = "";
    resetTimer(1);
    resetTimer(2);
    updateWordCount(1);
    updateWordCount(2);
  }
}

// Ctrl+Enter = copy
document.addEventListener("keydown", e => {
  if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
    e.preventDefault();
    copyForGrok();
  }
});
