/* All the content of the issue. Edit the text here and save; `npm run dev` reloads the page.
   Paragraph markup: *italic*, **bold**, "> " at the start for a quote block. */
import type { Article, Issue } from "@/lib/types";

export const issue: Issue = {
  name: "The Pakistan Naama",
  urdu: "پاکستان نامہ",
  tagline: "Stories the usual narrative leaves out",
  edition: "Fall Edition · Issue 01",
  logo: "/images/logo.png",
  instagram: "https://www.instagram.com/the.pakistan.naama/",
  x: "https://x.com/thepakistannama",
  facebook: "https://www.facebook.com/share/19xAsSEaFp/?mibextid=wwXIfr",
  credit: "POL 268 · Group 1 · Lahore",
  intro: [
    "Pakistan is a country of competing truths, inherited myths, and unfinished conversations. Pakistan Naama explores the tensions that shape our politics, society, and culture, looking beyond the headlines to the histories, ideas, and lived realities beneath them. We are intrigued in the tensions between what is said and what is experienced, what is remembered and what is forgotten, and what appears to be true from one perspective but less so from another.",
    "To read Pakistan differently is to begin seeing it anew.",
  ],
};

export const editorsNote = {
  title: "A Note from the Editor",
  author: "Fatima Akbar Khan, Chief Editor.",
  body: [
    "A country reveals itself in the strangest places: in the price of a cup of coffee, the distance between diagnosis and treatment, the dream of a life elsewhere, and the digital theatrics of those who govern us.",
    "This issue of Pakistan Naama moves between the intimate and the absurd, the structural and the spectacular, tracing the peculiar ways a nation makes itself known to those who inhabit it.",
    "Perhaps the most revealing things about a country are those it has learnt to live with.",
    "We invite you to look again.",
  ],
};

export const main: Article = {
  slug: "the-third-space-has-a-menu",
  section: "Main Story",
  author: "Natalia Anwar Malik",
  image: "/images/artisan-coffee.jpg",
  imageAlt: "Inside Artisan Coffee: armchairs under a blue neon sign at the foot of a staircase",
  title: "The Third Space Has a Menu (And Minimum Order Applies)",
  body: [
    { type: "image", src: "/images/artisan-coffee.jpg", alt: "Inside Artisan Coffee: armchairs under a blue neon sign at the foot of a staircase", align: "right" },
    "The empty coffee cups sit idle across tables long after they have been consumed. Some customers wait until closing hours, spending hours on end inside a small café, instead of choosing to go anywhere else. It’s the “*ghar ka mahol*” that they can’t quite escape when they enter such places; the soft ambient lights or even the PS5 tucked away into a corner, as is the case in Artisan Coffee especially. When coffee cups eventually do leave the table, they are to immediately be replaced with another concoction of drinks, perhaps even a dessert or two, until the end of an evening sees the average person racking up a bill of about Rs. 2000.",
    { type: "image", src: "/images/coffee-bar.jpg", alt: "A café coffee bar with pour-over equipment, a colour-wheel print and shelves of coffee bags on a white brick wall", align: "right" },
    "Across the city, a very paradoxical image meets the Kashmiri Chai vendor, as he watches upon his crowd. According to him, these are the “people who will happily spend Rs. 600 on a coffee in a cute establishment down the road, because it has a brand attached to it, but are unwilling to spend even Rs. 60 here.” The frustration isn’t limited to a few establishments in solidarity; it is instead substantiated by where coffee culture is headed in this historical city.",
    "Pakistan’s booming coffee culture seems to be a modern success story; an idea taken by the West and adapted so neatly for our Pakistani population, that people just can’t quite seem to get enough. Coffee shops provide the perfect mechanism for socializing, indulging in something delicious, and even boosting remote work productivity.",
    "However, it isn’t all quite so glamorous.",
    "Follow the gaps between the iced Spanish in a to-go plastic cup, vs. the cup of steaming chai in its usual Styrofoam container. Coffee shops have turned the third space, what was once something you would drop into for free, to a paid-only experience, where minimum order effectively applies. They have sold us the dream of what a good place looks like, but only as a borrowed idea; one that can’t quite stand up on its own two feet without a monetary transaction.",
    "Now, what exactly is a \"third space\", to begin with? Sociologist Ray Oldenburg described it as a place that is neither home nor work, where people simply gather. I prefer to call them the places that level the playing field, where status becomes invisible, and the only real gain is one of social cohesion. For several generations in Pakistan, this place was the chai dhaaba, the local park, even the narrow gully in between homes that housed hours of late-night one-tip cricket. Now, however, the answer has flipped.",
    "The youth have traded in local chai spots for coffee chains that are sprawling all across the city. According to Double Shot's manager, university students dominate, and they sit for three to four hours, finding it more comfortable to stay at a coffee shop after class than to just go home. Artisan's manager concurred, claiming that not only do regulars treat the place like a living room, but the shop has deliberately kept its environment as such to encourage more spending over a longer period of time. The dhaaba has, therefore, become a symbol of what this generation has outgrown.",
    "The modern café is quintessentially an ‘open’ environment, inviting both social connection and personal productivity. Staff doesn’t tend to hover, or hurry anyone along. According to a Double Shot Barista, “the real draw is in the discipline.” The service, atmosphere and quality are incomparable to whatever a roadside stall may offer. Despite the recent surge in new establishments, the barista says, footfall is ceaseless, as more supply has simply been matched by greater demand.",
    "To put it simply, the café is modern, orderly and safe. Quality has improved steadily, with baristas hired who have previously worked in the UAE, Oman and Qatar. The brand name often carries gravitas by itself. It is a story that defines this generation’s pastime, and it is easy to see why.",
    { type: "pull", text: "So, the third space that once only asked for a few rupees a night now asks for Rs 3000 and, increasingly, for the right look." },
    { type: "image", src: "/images/cafe-table.jpg", alt: "A café table seen from above: iced coffees, toasted sandwiches, sunglasses and a purse", align: "left" },
    "But this story has an entry fee.",
    "The third space we have built for ourselves now requires a cover charge. On average, across Artisan, Gloria Jeans and Double Shot, people spend about Rs. 3000. But this price tag is denoted by a quiet privilege which acts as an undercurrent to the entire affair. A café works by making you spend more time in their establishment. The longer you sit, the more you order, and the more you sit, the more you order what the room is ordering. Consumption then becomes a way of belonging: you buy what everyone else is buying.",
    { type: "image", src: "/images/brown-cafe.jpg", alt: "A warmly lit café corner with a chalkboard menu, a pink shelf of coffee bags and a wall covered in sticky notes", align: "right" },
    "Beyond simply ‘belonging’ more, it is ultimately a way of being seen. After all, the iced Spanish latte is rarely ever entirely about caffeine; it is more so a method of building an aspirational identity that can be seen, and coffee shop goers are acutely aware of this fact when they visit such spaces. The fact that managers themselves refer to the people who stroll in at night as the “elite class” denotes enough about how the split between customer bases is made.",
    "Ahmed Waseem, the owner of Brown, is blunt about the cost-effect. He states that spending your days in coffee shops has become a requirement for making friends and raising your social standing. Coffee culture divides, more than unites, according to him, as he accepts that class divisions become harder to ignore, and it is a chasm that coffee shop owners cannot possibly cross over by bringing prices down without sacrificing on the quality of ingredients.",
    "So, the third space that once only asked for a few rupees a night now asks for Rs 3000 and, increasingly, for the right look.",
    "The dichotomy is increasingly apparent when one crosses the roadside. Both the Kashmiri chai vendor, and Quetta Chai Paratha, claim that footfall has steeply dropped as “people with money now go for coffee, and mostly laborers and poorer customers are left”. They mention the story of how the “*baarey log*”, as they put it, no longer come, and the business continues to take revenue losses. Though older customers hold out, because they are habitual tea drinkers who can't give it up, but there is little way back for chai to “recover its old position”, as costs keep rising.",
    "So now, not only is the third space limited by design, but also it is sorted by income. The dhaaba once held a wide cross-section of the city. Now class divisions have split who visits which establishment. Exclusion that once simmered beneath the surface is not only propagated by coffee shops but integral to how their culture survives.",
    "Perhaps most crucially, the coffee shop has arrived as a foreign import. Waseem states how nearly every café opening in Lahore is shaped by western culture, and Brown is no exception: of its four partners, one borrowed the model off of a café back in the UK when she went for her master’s degree, whilst two are devoted to Japanese drinks and lifestyle.",
    "But Brown isn’t an anomaly, it simply follows the rubric. Pakistani customers crave the best of both worlds, caught in a modern alienation that leaves little room for personal identity. In a post-colonial world, in an effort to seem globalized and acceptable to international stakeholders, there is a visible push to embody Western or corporate urban aesthetics that are otherwise absent from Pakistan’s own culture and heritage.",
    "There is ultimately a sense of cultural borrowing at the heart of this story. The café might sell the “*ghar ka mahol*”, but it is an environment borrowed from elsewhere, while the actual local spot to meet gathers dust.",
    "It would be easy to stop here, with a villain and a victim. But, without nuance, this story may just be a blame game. Now, chai can never inherently be replaced, because it serves a community and is embedded deep into Pakistan as a nation. Yet coffee shops are sometimes easier to spend hours in; a generation of students has found a comfortable, structured place to spend its time, and they are not leaving any time soon.",
    "So, what must be done? The choice sometimes simply isn’t an either/or. Perhaps local Pakistani flavors can find themselves permanent spots on coffee shop menus; or bean sourcing can be done in a manner to widen the audience who can even get in.",
    "The question is no longer whether Pakistan drinks coffee. It is whether the places where we gather still feel like they belong to us, and whether everyone is still allowed in.",
  ],
};

export const side: Article[] = [
  {
    slug: "sindh-rabies-crisis",
    section: "Side Story",
    title: "200,000 Bites, 42 Deaths: Sindh’s Rabies Crisis Deepens",
    /* No photo in the Drive fits this story, so it leads with a fact panel built from the figures in the text. */
    facts: {
      title: "Rabies in Sindh, by the numbers",
      stats: [
        { value: "285,000+", label: "Dog-bite incidents recorded in Sindh in 2025" },
        { value: "42", label: "Rabies deaths in Sindh by October 20" },
        { value: "11,000+", label: "Dog-bite cases at JPMC, Karachi, during 2026" },
      ],
      meters: [
        { label: "Dogs vaccinated by October 2025, against the mid-2025 target", value: 30729, max: 125000, valueText: "30,729", maxText: "125,000" },
        { label: "Funds released by December 2025, of the 2025–26 allocation", value: 66.255, max: 265, valueText: "Rs66.255m", maxText: "Rs265m" },
      ],
      source: "Figures as reported in the article (Ilyas, 2025; Ilyas, 2026).",
    },
    body: [
      "Karachi, a metropolis of more than 20 million people, is facing a growing problem of dog bites and consequently, rabies. Despite repeated government efforts to control the stray dog population, people continue to lose their lives to a disease that is almost always fatal once symptoms appear. This raises an important question: is the problem a failure of administration, a lack of public awareness, or a combination of both?",
      "Rabies is a viral disease that attacks the brain and nervous system. It is usually transmitted through the bite of an infected animal, with dogs accounting for up to 99% of human rabies cases worldwide. The symptoms, which include fever, hydrophobia and difficulty swallowing, take as long as 1 to 3 months to show up, and once they do, death is almost inevitable. However, timely treatment after exposure can prevent the disease. According to the World Health Organization (WHO), immediate wound washing, vaccination and, where necessary, the use of rabies immunoglobulin can save lives.",
      "The problem in Karachi is not simply the presence of stray dogs, but the failure to manage their population and prevent the spread of rabies. The city's abundant of food waste provides an easy source of food for these animals. Poor waste management, combined with ineffective population control, allows the problem to continue. While killing dogs may appear to offer a quick solution, it does not provide a lasting answer to rabies and is also morally questionable.",
      "The Sindh government introduced a Stray Dog Birth Control and Anti-Rabies Vaccination Programme in 2019. Later, the Rabies Control Programme Sindh set a target of vaccinating and sterilising 125,000 dogs by mid-2025 and establishing centres in 20 districts. However, by October 2025, officials reported that only 30,729 dogs had been vaccinated and 19,449 sterilised. The programme has faced operational difficulties, while funding has also remained a concern. Of the Rs265 million allocated for dog vaccination and sterilisation in the 2025–26 financial year, only Rs66.255 million had been released by December 2025 (Ilyas, 2025).",
      "These figures raise questions about how effectively public funds are being used and why the programme has struggled to meet its targets. Although the government has announced plans to expand its work, the results suggest that more consistent action is needed. The issue cannot be solved through occasional campaigns or by simply removing dogs from one area and releasing them elsewhere.",
      "The situation has become increasingly serious. Sindh recorded more than 285,000 dog-bite incidents in 2025, while Jinnah Postgraduate Medical Centre (JPMC) in Karachi reported over 11,000 dog-bite cases during 2026. By October 20, the reported number of rabies deaths in Sindh had reached 42. These figures show the scale of the problem, although dog bites must not be confused with confirmed rabies infections. Many cases may also go unreported when people turn to home remedies or delay seeking medical care (Ilyas, 2026).",
      { type: "pull", text: "The vaccine exists; what remains necessary is to ensure that prevention and treatment reach those who need them." },
      "One such case involved a 38-year-old man from Hyderabad who died at JPMC after developing symptoms including hydrophobia, fever and difficulty swallowing. “Patient Javed was a resident of Hyderabad and was brought to the emergency department yesterday [Sunday] around 11pm with complaints of hydrophobia, irritability, fever and dysphagia [discomfort in swallowing],” shared a JPMC doctor on the condition of anonymity. He had reportedly been bitten on the face four months earlier, but his preventive treatment history was unknown. His death shows the danger of leaving a dog bite untreated, even when symptoms do not appear immediately.",
      "These circumstances have spread fear in the hearts of the general populace of Karachi. Citizens report that the increasing number of dog bites in the city has led to them having to change their ways of life, which include parents stopping children from playing outside in the streets and adults debating whether or not to ride a motorcycle due to the risk of being chased and bitten by a stray dog. “We feel safe only when travelling by car. If we are on a motorcycle or on foot, especially while carrying something, these starving stray dogs inevitably chase us. They either attempt to snatch our belongings or attack, leaving us terrified,” said one resident. “Even if they don’t bite, the mere contact with our clothes feels disgusting.” Another resident added that this constant nuisance was an example of how an unchecked problem, if ignored for long, could gradually encroach upon people’s everyday freedom. Reporting these incidents to municipal cooperation timely seems as the viable option for citizens but the ineffectiveness of the relevant authorities in the entire situation has resulted in rising concerns.",
      "The responsibility, however, does not lie with the public alone. In September 2026, the Sindh government suspended four doctors and three other health workers following the deaths of five people who had attended anti-rabies treatment units. Investigations found failures in the handling of some cases, including wounds that were not properly assessed and patients whose treatment records did not establish whether they had received the required care. Authorities subsequently audited treatment centres and strengthened the monitoring of cases and vaccine supplies (Khan, 2026).",
      "These developments show that the problem extends beyond stray dogs. Even when people seek medical help, poor treatment can put their lives at risk. Hospitals need trained staff, reliable vaccine supplies and proper procedures to ensure that every patient receives appropriate care.",
      "The government must therefore focus on both preventing rabies among dogs and improving treatment for people. Mass dog vaccination and sterilisation should be carried out consistently, while better waste management can help address the conditions that allow stray dog populations to grow. Authorities must also ensure that funds allocated to these programmes are released and used effectively. Relocating dogs to shelters rather than arbitary locations may help in some situations, but it cannot replace a wider plan for vaccination, humane population control and public safety.",
      "Public awareness is equally important. Anyone bitten or scratched by a potentially rabid animal should immediately wash the wound with soap and running water for at least 15 minutes and seek medical attention. People must not wait for symptoms to appear or rely on home remedies. The government should make treatment facilities accessible and ensure that citizens know where to obtain help.",
      "Rabies remains a serious public-health problem in Sindh, but its consequences are preventable. The continued deaths point to weaknesses in administration, public awareness and healthcare delivery. If Pakistan is to meet the WHO goal of eliminating human deaths from dog-mediated rabies by 2030, it must move beyond announcements and adopt a consistent approach that protects both people and animals. The vaccine exists; what remains necessary is to ensure that prevention and treatment reach those who need them.",
    ],
  },
];

export const columns: Article[] = [
  {
    slug: "defence-minister-defending-marilyn-monroe",
    section: "Column",
    image: "/images/column/tweet-1.jpg",
    imageAlt: "Screenshot of Khawaja M. Asif replying “Watch” to an AI-generated image of Marilyn Monroe",
    title: "Defence minister defending Marilyn Monroe",
    dek: "A tale of unseriousness featuring Pakistan and its leaders",
    body: [
      "“Can you spot the one thing that does not belong in 1956?” asked an X account by Olivia emi (@emmii_67) on 13th October 2026, tagged under an AI generated image of Marilyn Monroe. However, one man paused to retort with nationalistic pride- “Watch 😊”. That man turned out to be Khawaja Muhammad Asif, the Defence Minister of the Islamic Republic of Pakistan. This sums up our government, where there is a war on our doorstep but ministers are playing spot the difference.",
      { type: "image", src: "/images/column/tweet-1.jpg", alt: "Screenshot: Khawaja M. Asif replies “Watch” to Olivia emi’s post asking what doesn’t belong in 1956, under an AI-generated image of Marilyn Monroe", align: "tweet" },
      "Many on X perceived his comment as a backhanded remark aimed at Imran Khan and his Toshakhana watch case, a perception not unfounded given his history. In a Facebook reel shared by Dawn in 2022, Khawaja sahab is heard to accuse Khan of twisting the rules of the Toshakhana in his favour and is a man that calls everyone dishonest. He used all his cognitive abilities on this masterstroke, only for the arrow to hit his forehead. Now, the leopards. An account called Rossy (@ImRossyRibon) asked “sharp eyes people” to count the number of leopards lurking behind the rocks. His reply- “Six” (finally, some border surveillance, of a jungle!). Sybil Ahmed, an X user quote tweeted him - “Aap itne velay hotay hein begum ko matar cheel dia karein.” At least the peas would be productive.",
      { type: "image", src: "/images/column/tweet-3.jpg", alt: "Screenshot: Khawaja M. Asif replies “Six” to Rossy’s post asking how many leopards are in a picture", align: "tweet" },
      "Hasan (@Hason818) on X introduced him under his own post- “Ladies and gentlemen… I present to you the defence minister of Islamic republic of Pakistan.” Fatimah (@Mfatiamh03) on X advised those who felt underqualified for their jobs to take inspiration from our minister, who is busy doing “strategic analysis on an AI generated Marilyn Monroe.” Journalist Gul Bukhari had nothing to say but “لاحول ولا قوة”. Finally came Ansar, an Instagram content creator, whose reel gained 3 million views and 140,000 shares. He made a satirical reel, where he concerned with the war, and a defence pact he needs to honour, he opens up his laptop to check on our defence minister. Out comes “Watch 😊”, whereupon Ansar gazes in disbelief and shuts the laptop (same, Ansar bhai, same). Ek tweet, aur poori qaum ka muft entertainment. The problem doesn’t lie with the tweet, but the lack of unseriousness which his actions demonstrated.",
      { type: "image", src: "/images/column/tweet-2.jpg", alt: "Screenshot: Fatimah’s post about the Minister of Defence doing strategic analysis on an AI-generated Marilyn Monroe", align: "tweet" },
      { type: "image", src: "/images/column/tweet-5.jpg", alt: "Screenshot: Gul Bukhari’s post reading لاحول ولا قوة", align: "tweet" },
      { type: "image", src: "/images/column/tweet-4.jpg", alt: "Screenshot: Hasan’s post presenting the defence minister of the Islamic Republic of Pakistan", align: "tweet" },
      { type: "pull", text: "A public office does not come with permission to make memes." },
      "On Geo News, Khawaja sahab stated that he personally manages the account, two hundred percent, called himself an ordinary human being and asked, “What is non-serious about this?” Sir, aap normal insaan zaroor hain, magar aap ki kursi normal nahi hai. Any public office comes with immense level of responsibility, power and a voice which represents the country. Being a defence minister, and commenting on marlyn monroe’s AI generated image through his “official” account undermines the power of such a high post. Moreover, such actions also belittle the problems going on within the state, where the country is more focused on laughing at the minister instead of questioning their government of the following acts committed in the past week.",
      "Laiba Ijaz, a 24-year-old gold medallist, took her own life after her family was allegedly cheated of millions in a false US admission scam. Her father, a milk seller, sold a plot for her dream. The accused was later killed in police custody, supposedly by his own goons, not one policeman was harmed (bulletproof jackets, or bulletproof narratives?). In Multan, a 15-year-old orphan Waseem Abbas was run over by a car. The accused “escaped” custody and died in a CCD encounter the following morning. Where are the courts, where is the cabinet? Where is the defence which was meant to protect its citizens dignity?",
      "A public office does not come with permission to make memes. It requires gravity, empathy and the wisdom to know when to keep quiet. What we have is a leadership devoid of media training and advisors with the spine of a jellyfish, idly commenting on baseless posts while keeping a quite on the social issues faced by their citizens. Pakistan does not want its defence minister to become a humorless monument to national security. It does, however, need a political system which protects the interests of its citizens with seriousness and cases not shelved under the table.",
      "Khawaja sahab might feel wronged, as the great Urdu poet Akbar Allahabadi wrote:",
      { type: "verse", lang: "ur", lines: ["ہم آہ بھی کرتے ہیں تو ہو جاتے ہیں بدنام", "وہ قتل بھی کرتے ہیں تو چرچا نہیں ہوتا"], translit: "Hum aah bhi karte hain to ho jaate hain badnaam, woh qatl bhi karte hain to charcha nahin hota." },
      "If our defence minister can count six leopards in a picture, why can his government not find the wolves inside its police stations, and how many more Laibas and Waseems must die before someone- finally- takes this job seriously? The job- seemingly comes with vip protocols and privileges, requires accountability as well. Pakistanis have been waiting for 77 years for a miracle, but the situation keeps getting messier. We hope our government and a certain authority wakes up before it’s too late, before Pakistan becomes a joke in front of the whole world. “Hum dekhein gay” is what Pakistani Quam has been saying since years, it takes a mere incident for the country to wake up against the injustice, and defend their rights- and that moment won’t be good for our “defence minister” to tweet on.",
    ],
  },
  {
    slug: "the-pakistani-dream-is-to-leave-pakistan",
    section: "Op-Ed",
    author: "Mashal Irfan",
    title: "The Pakistani Dream Is to Leave Pakistan",
    dek: "When did emigration become the mark of success within our system?",
    body: [
      "What is the “Pakistani dream”, and what counts as the epitome of success within our socioeconomic system? Over the years, I’ve come across differing points of view on this particular question, but there is one common thread: the best thing a person here can do is leave. Discussions at family gatherings revolve around the dismal state of the economy. My aunts and uncles talk about moving abroad; my parents play devil’s advocate and push for the merits of staying, which turns the discussion into a heated debate. At school, the walls are adorned with images of alumni who have graduated and gone to schools in the US with hefty scholarship packages; notably, there is not any Pakistani university shown on this *wall of fame*. Staying here is not considered something worth doing - if you go to a private school and do O and A-levels, your final destination is presumed foreign. In the final stretch of A-levels, conversation launched and perished with the Common App and everyone’s SAT score. Counselors encourage A-average and C-average students alike to apply in the US, UK, and Canada, regardless of a student’s scholastic aptitude or financial situation. Schools in Pakistan are a backup plan instead of a viable goal to work towards, and I recall applying to LUMS and NUST as “safety” schools myself in spite of the fact that I had no particular desire to pursue an undergraduate education outside of Pakistan.",
      "Recent developments have made me wonder why this is the norm. The case of Laiba Ijaz in particular highlights the most harrowing manifestation of this phenomenon. Laiba was a high-achieving student and a graduate of the International Islamic University Islamabad who committed suicide earlier this month. Investigations into her death revealed that she was being defrauded by individuals who claimed they could get her into Harvard, and said that they would make arrangements for a scholarship and US visa. She and her family reportedly raised money for all of this by selling property and gold/jewellry worth millions of rupees, demonstrating how invested they were in the mere possibility of her studying abroad. This goes to show just how much hope Pakistani families can place in the idea of foreign education as a route to security, upwards mobility, and success.",
      "Studying in LUMS, one of Pakistan’s most expensive universities, has also shown me the ground reality of what younger, up-and-coming adults think of this phenomenon independent of the direct influence of their homes or of school counselors. Sitting with friends in the dorms or at the khokha, discussions of the future inevitably lead to questions about pursuing a masters’ abroad or applying for jobs in foreign firms and organizations. LUMS in itself is often seen by both students and their families alike as a ticket to prestigious universities abroad for fully-funded masters’ degrees, which for most people is exactly what justifies the expense. Rarely will you meet anyone (regardless of their field of study) who wishes to remain here to work or to pursue further education. I myself have been met with responses varying from shock to confusion at my lack of desire to leave.",
      "Such a response is hardly surprising. Economic pressures, limited professional opportunities, political instability, and declining faith in public institutions give young people legitimate reasons to look beyond their own country when planning their futures. The numbers speak for themselves: in 2025, more than 762,000 Pakistani workers were officially registered for overseas employment. Pakistan also sends many of these workers to Gulf countries every year,but this migration is often more temporary and circular owing to the differing employment opportunities and policies within the GCC. This statistic alone does not account for every student, migrant worker or professional who leaves through other routes, and it also does not mean that all of these workers emigrated permanently, but it does illustrate just how deeply the concept of migration is woven into our economic reality.",
      { type: "pull", text: "Staying becomes something that needs a reason, and leaving justifies itself." },
      "Within many circles upon interpersonal interaction, I observed not going abroad to be conflated with some sort of failure. Perhaps you didn’t go because you failed to get a scholarship, or could not afford to leave, or were unable to find a job abroad. Staying becomes something that needs a reason, and leaving justifies itself. This has led to a synthesis of moving abroad with *success*. Seeing highly paid overseas Pakistanis can often lead those who live here to equate location with prosperity, but the inverse is also true: there are people everywhere who find success, and there are many who don’t.",
      "As strange as it may sound, I do believe that there is an argument to be made for staying. There are many cases of people who have moved abroad with the intent of settling there, and who have subsequently moved back here after a period of time. This is most often seen with people who pursue postgraduate studies - after attaining degrees and qualifications from abroad, there are many people who choose to come back to Pakistan to actually work in their field of expertise. This is most often seen with doctors, who use foreign qualifications to open their own practices here, or with academics, who use their foreign degrees as a stepping stone towards tenure in Pakistani universities. Larger universities like LUMS, NUST and IBA hold many such examples in their faculty lineups.",
      "So why come back here after spending time abroad? A common sentiment among those who come back is the cultural divide. While there are benefits to be reaped from a standardized, uniform system like those often seen in other countries, a major downside is the homogenizing effect that those systems have on individuals. This is most obvious in Western countries like the US and Canada: people are often treated like cogs in a machine, and the isolationist and capitalistic culture means that although you may be compensated fairly for your work, you’re probably “working to live” instead of the opposite. This particular brand of rugged individualism is incompatible with the culture that most people in Pakistan are raised in, which is one of community. Other cultural issues, like those pertaining to religion, lifestyle preferences, and even the casual racism that one risks facing on a regular basis, often leads people to come back to Pakistan.",
      "This helps give some nuance to the concept of *brain drain*, which is a problem often cited by news outlets with regards to Pakistan’s educated population. While moving abroad may be attractive due to the greater quality of life and plethora of opportunities offered there, the increasing number of return cases helps us see that it may not be the be-all-end-all for educated and qualified individuals. This can also be attributed to increasing anti-immigration sentiments and policies across the globe, but we can see that there **are** prospects for competent people within our country - there just needs to be **more** of them.",
      "I’m not arguing that young Pakistanis with potential should stay out of patriotism, nor that choosing to leave represents a betrayal. People should go wherever their lives take them, and taking the best opportunities available is a good thing. But perhaps there needs to be a change in the attitude surrounding it; perhaps we should stop treating departure as an achievement in itself. A society in which leaving is synonymous with success puts undue pressure on individuals not only to work within a very narrow definition of achievement, but to then make all of the sacrifices required for it worth it, as is highlighted by the Laiba Ijaz case. Perhaps the more troubling issue is that it also takes away exceptional talent from where it is needed locally. As young Pakistanis are increasingly expected to compensate for the inadequacies of the very institutions meant to educate and prepare them for the future. By seeking better opportunities abroad, they make up for the lack of adequate educational initiatives at home, but in doing so, they may also perpetuate the cycle: the institutions remain underdeveloped, and the next generation is left to seek elsewhere what it should have been able to find here. The Pakistani dream does not have to mean staying in Pakistan, but it does not have to mean leaving either.",
    ],
  },
];


/* Entertainment section, as sent in the Entertainment Section Final Copy doc. */
const A = "https://audio-ssl.itunes.apple.com/itunes-assets/";
const M = "https://music.apple.com/us/album/";
const I = "https://is1-ssl.mzstatic.com/image/thumb/";
export const hotTake: Article = {
  slug: "rewatching-your-favourite-show",
  section: "Hot Take",
  title: "Rewatching Your Favourite Show Beats Starting a New One",
  body: [
    "Every week there is a new “must-watch” series, recommended by Letterboxd or a friend over a casual coffee, and every week your watchlist gets longer while your enthusiasm shrinks. Admit it, your food is in front of you, you scroll Netflix for 40 minutes and watch nothing, your food goes cold, and you almost always end up watching the same comfort show for the fifth time.",
    "Rewatching is not laziness. It’s quality control. You already know which jokes land, how good the soundtrack is, and that the ending is worth it. There is no risk of a flop finale or a plot that collapses by the sixth episode. Rewatching also makes you notice things you missed the first time around: the foreshadowing and the lines that hit differently now.",
    "New releases demand your time, your attention, and often the spoiler-avoiding discipline that many of us struggle with. A rewatch asks for nothing and gives you the cosy feeling of coming home. Let’s face it: rewatching a favourite show with a bowl of warm ramen is the best combination there is.",
    "Ignore the pressure to keep up with every trending title. The best show to watch tonight is probably one you’ve already seen.",
  ],
};

export const entertainment = {
  playlist: {
    title: "Autumnal Playlist",
    poster: "/images/entertainment/autumn-soundtrack.jpg",
    /* `preview` is Apple's official 30-second clip of the original recording; `apple` opens the full song in Apple Music. */
    tracks: [
      { title: "Purple Rain", artist: "Prince", preview: A + "AudioPreview211/v4/11/09/30/1109307b-cdbd-20b1-aebc-c39c632a73a4/mzaf_11384520489297938238.plus.aac.p.m4a", apple: M + "purple-rain/1746833068?i=1746833484", art: I + "Music211/v4/00/17/f2/0017f24f-e580-b77a-71a8-1bc7b75881bf/603497822065.jpg/300x300bb.jpg" },
      { title: "California Dreamin", artist: "The mamas and The papas", preview: A + "AudioPreview221/v4/21/30/9a/21309af6-0458-39c9-f420-22bb0f0ac11b/mzaf_5048935370131739463.plus.aac.p.m4a", apple: M + "california-dreamin-single/1440795791?i=1440796325", art: I + "Music221/v4/19/39/88/193988e9-02c3-b879-5881-2d31c9774bbf/06UMGIM04100.rgb.jpg/300x300bb.jpg" },
      { title: "Fade into you", artist: "Mazzy star", preview: A + "AudioPreview211/v4/4c/db/e8/4cdbe88c-b737-617d-0c1c-35ba36445750/mzaf_4038354414747356567.plus.aac.p.m4a", apple: M + "fade-into-you/1440848808?i=1440848810", art: I + "Music116/v4/0f/03/ea/0f03ead1-d1eb-27fd-0734-b257b515692f/13UABIM59278.rgb.jpg/300x300bb.jpg" },
      { title: "The A team", artist: "Ed sheeran", preview: A + "AudioPreview211/v4/ac/10/2c/ac102c22-cd64-b2ad-5d2e-03923594c1a3/mzaf_3740743634676510964.plus.aac.p.m4a", apple: M + "the-a-team/448213992?i=448213995", art: I + "Features115/v4/65/fb/84/65fb8432-f539-d67d-0670-b1358d16e5af/contsched.zkbwdtfj.jpg/300x300bb.jpg" },
      { title: "Don't Look Back in Anger", artist: "Oasis", preview: A + "AudioPreview221/v4/3d/25/89/3d2589b0-5ecd-a519-758a-12c1110dfc7b/mzaf_9233160908779902384.plus.aac.p.m4a", apple: M + "dont-look-back-in-anger/1517447039?i=1517447336", art: I + "Music113/v4/04/92/e0/0492e08b-cbcc-9969-9ad6-8f5a0888068c/5051961007107.jpg/300x300bb.jpg" },
      { title: "O Children", artist: "Nick Cave and the Bad Seeds", preview: A + "AudioPreview211/v4/be/94/d3/be94d37b-9a98-52ba-82c1-a55e46a4786d/mzaf_2763611376421231712.plus.aac.p.m4a", apple: M + "o-children/1528515334?i=1528515506", art: I + "Music211/v4/7b/43/46/7b434664-a1f1-8c98-bab3-3145fe9d1c7b/5099962629829.jpg/300x300bb.jpg" },
      { title: "Bittersweet Symphony", artist: "The Verve", preview: A + "AudioPreview211/v4/ce/e4/8b/cee48b77-3aad-5e1c-0199-15d3b8c3ed16/mzaf_477277747956185474.plus.aac.p.m4a", apple: M + "bitter-sweet-symphony/1440885112?i=1440885120", art: I + "Music124/v4/02/b2/68/02b268c7-a234-cb8b-7ef3-a774340744eb/17UM1IM02768.rgb.jpg/300x300bb.jpg" },
      { title: "Ophelia", artist: "The Lumineers", preview: A + "AudioPreview211/v4/e8/a4/79/e8a4797e-db30-5093-283c-b64c1d9d9d72/mzaf_8442144519741055851.plus.aac.p.m4a", apple: M + "ophelia/1754016727?i=1754016949", art: I + "Music211/v4/df/64/27/df642707-07c2-bb17-56fd-6ae84070e17d/18541.jpg/300x300bb.jpg" },
      { title: "Aline", artist: "Jarvis Cocker", preview: A + "AudioPreview221/v4/b2/23/e4/b223e4bf-aa38-e528-f3f0-482550a7f466/mzaf_18009916906349934219.plus.aac.p.m4a", apple: M + "aline/1584978682?i=1584979115", art: I + "Music125/v4/b1/6c/83/b16c8343-9309-55cd-553b-c7f3e07f3da1/2120ABK00531.rgb.jpg/300x300bb.jpg" },
      { title: "Please, Please, Please, Let Me Get What I Want", artist: "The Smiths", preview: A + "AudioPreview221/v4/b9/57/a3/b957a3f9-187a-08f7-e946-3a52b8665d0c/mzaf_3485887265344091275.plus.aac.p.m4a", apple: M + "please-please-please-let-me-get-what-i-want/799969670?i=799969796", art: I + "Music211/v4/b6/df/31/b6df310e-6ba1-bac5-8929-68e48bf56033/825646642854.jpg/300x300bb.jpg" },
    ],
  },
  crossword: {
    title: "Archaeological Sites of Pakistan: Crossword",
    instructions: "Fill in the grid using the clues below.",
    /* Answer grid from the answer key: letters are cells to fill, "." is blank. */
    grid: [
      "..........B..",
      "..........A..",
      ".......SOAN..",
      "....G.....B..",
      "....A.K.T.H..",
      "MOHENJODARO..",
      "E.A.D.T.K.R..",
      "H.R.H.D.H.E..",
      "R.A.A.I.T....",
      "G.P.R.J.I....",
      "A.P.A.I.B....",
      "R.A....TAXILA",
      "H.......H....",
      "........I....",
    ],
    numbers: { "0,10": 1, "2,7": 2, "3,4": 3, "4,6": 4, "4,8": 5, "5,0": 6, "5,2": 7, "11,7": 8 } as Record<string, number>,
    words: ["Mohenjodaro", "Gandhara", "Banbhore", "Takhtibahi", "Taxila", "Mehrgarh", "Harappa", "Soan", "Kotdiji"],
    answers: ["1 Down: Banbhore", "2 Across: Soan", "3 Down: Gandhara", "4 Down: Kot Diji", "5 Down: Takht-i-Bahi", "6 Across: Mohenjo-daro", "6 Down: Mehrgarh", "7 Down: Harappa", "8 Across: Taxila"],
  },
  sudoku: {
    title: "Sudoku",
    difficulty: "Difficulty: Easy • 40 starting numbers",
    instructions: "Fill every row, column and 3×3 box with the digits 1 to 9. No digit may repeat in any row, column or box.",
    answerNote: "Puzzle No. 4568. Shaded numbers are the answers.",
    puzzle: [
      "52.87....",
      ".69..571.",
      "178...2..",
      ".47.5.1.2",
      ".12...53.",
      "3.6.1.49.",
      "..5...364",
      ".914..82.",
      "....82.71",
    ],
    solution: [
      "523871649",
      "469325718",
      "178964253",
      "947653182",
      "812749536",
      "356218497",
      "285197364",
      "791436825",
      "634582971",
    ],
  },
  cartoon: {
    src: "/images/entertainment/political-cartoon.png",
    alt: "Cartoon titled “Lahore, 2040”: in a smoggy city a man in a gas mask breathes through a tube from a single tree labelled “Fresh air.” Caption: “Now available: one tree per person.”",
  },
  /* From the existing site: the word search puzzles. */
  puzzles: {
    "Coffee Culture": ["COFFEE", "CHAI", "DHABA", "BARISTA", "LATTE", "ESPRESSO", "AUTUMN", "LAHORE", "MATCHA", "CAFE", "CLASS", "THIRDSPACE"],
    "Heritage Sites": ["BADSHAHI", "TAXILA", "HARAPPA", "ROHTAS", "MAKLI", "SHALIMAR", "MULTAN", "THATTA", "DERAWAR", "MOHENJODARO", "LAHOREFORT"],
  } as Record<string, string[]>,
};

export const team: Record<string, string[]> = {
  "Editor-in-Chief": ["Fatima"],
  "Deputy Editor": ["Kashaf"],
  "Sub-Editors": ["Amna Billoo", "Insiya Bakali", "Hussain"],
  "Writers": ["Mashal Irfan", "Natalia", "Subhan Ali", "Fatima Zahid", "Alesha"],
  "Reporters": ["Alizay Khanzada", "Minahil Khan", "Ashiq", "Fatima Javed"],
  "Social Media": ["Yumna Junaid", "Khadija Sajid", "Zaynab Tiwana"],
  "Photography & Media": ["Javeria Tariq", "Jahangeer Khan", "Mymnah"],
  "Website": ["M. Suleman Khan", "Muhammad Hamdan"],
};
