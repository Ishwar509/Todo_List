import Todo from "./factories/todo";
import Project from "./factories/project";

const dummyData1 = [
    {
        title: 'Complete Project Proposal',
        dueDate: '2023-12-31',
        priority: 'High',
        checklist: ['Research', 'Outline', 'Draft'],
        isComplete: false,
        note: 'Important project for the upcoming deadline.',
    },
    {
        title: 'Buy Groceries',
        dueDate: '2023-12-25',
        priority: 'Medium',
        checklist: ['Milk', 'Bread', 'Eggs', 'Fruits'],
        isComplete: false,
        note: 'Don\'t forget to buy fresh vegetables!',
    },
    {
        title: 'Gym Workout',
        dueDate: '2023-12-28',
        priority: 'Low',
        checklist: ['Cardio', 'Weights', 'Stretching'],
        isComplete: false,
        note: 'Focus on leg exercises today.',
    },
    {
        title: 'Book Flight Tickets',
        dueDate: '2024-01-15',
        priority: 'High',
        checklist: ['Check passport', 'Choose seats', 'Confirm dates'],
        isComplete: false,
        note: 'Check for any travel restrictions due to COVID-19.',
    },
];

const dummyData2 = [
    {
      title: "Schedule dentist appointment",
      dueDate: "2024-01-15",
      priority: "Medium",
      checklist: ["Call dentist", "Choose a date", "Confirm appointment"],
      isComplete: false,
      note: "Remember to ask about teeth whitening options.",
      createDate: "2023-12-22"
    },
    {
      title: "Submit project proposal",
      dueDate: "2023-12-28",
      priority: "High",
      checklist: ["Finalize content", "Create presentation", "Practice pitch"],
      isComplete: false,
      note: "Review budget and timeline before submission.",
      createDate: "2023-12-22"
    },
    {
      title: "Plan weekend getaway",
      dueDate: "2024-01-05",
      priority: "Medium",
      checklist: ["Choose destination", "Book accommodations", "Plan activities"],
      isComplete: false,
      note: "Research local attractions and restaurants.",
      createDate: "2023-12-22"
    },
    {
      title: "Prepare for job interview",
      dueDate: "2024-01-10",
      priority: "High",
      checklist: ["Research company", "Practice answers to common questions", "Choose professional outfit"],
      isComplete: false,
      note: "Print extra copies of resume and references.",
      createDate: "2023-12-22"
    },
    {
      title: "Organize home office",
      dueDate: "2023-12-29",
      priority: "Medium",
      checklist: ["Sort through papers", "File documents", "Declutter workspace"],
      isComplete: false,
      note: "Consider donating or recycling unused items.",
      createDate: "2023-12-22"
    },
    {
      title: "Book car maintenance",
      dueDate: "2024-01-20",
      priority: "Medium",
      checklist: ["Call mechanic", "Schedule appointment", "Request estimate"],
      isComplete: false,
      note: "Ask about any upcoming service needs.",
      createDate: "2023-12-22"
    },
    {
      title: "Start reading new book",
      dueDate: "2024-01-30",
      priority: "Low",
      checklist: ["Choose book", "Set reading schedule", "Join book club (optional)"],
      isComplete: false,
      note: "Consider starting a reading journal to track progress.",
      createDate: "2023-12-22"
    }
];

const dummyData3 = [
        {
            title: 'Host Epic Dance Party for Cats',
            dueDate: '2023-12-20',
            priority: 'High',
            checklist: ['Stock up on catnip', 'Hire laser pointer DJ', 'Supply fluffy disco balls'],
            isComplete: false,
            note: 'Ensure guests have mastered the art of hairball removal.',
        },
        {
            title: 'Write Limerick About Your Houseplants',
            dueDate: '2023-12-28',
            priority: 'High',
            checklist: ['Investigate plant puns', 'Master botanical rhythm'],
            isComplete: false,
            note: 'Don\'t forget to rhyme "photosynthesis" with "kisses".',
        },
        {
            title: 'Challenge Squirrel to Thumb War',
            dueDate: '2024-01-10',
            priority: 'Medium',
            checklist: ['Locate willing squirrel', 'Practice thumb dexterity'],
            isComplete: false,
            note: 'Beware of potential nut-related distractions.',
        },
        {
            title: 'Choreograph Sock Puppet Opera',
            dueDate: '2023-12-29',
            priority: 'Low',
            checklist: ['Cast mismatched socks', 'Compose dramatic sock-et', 'Construct miniature stage'],
            isComplete: false,
            note: 'Prepare for thunderous applause (from your feet).',
        },
        {
            title: 'Research Vacation Spots for Introverted Llamas',
            dueDate: '2024-01-05',
            priority: 'Medium',
            checklist: ['Find llama-friendly resorts', 'Book private pastures', 'Pack extra spittoons'],
            isComplete: false,
            note: 'Avoid destinations known for excessive drama.',
        },
        {
            title: 'Teach Goldfish to Sing Opera',
            dueDate: '2023-12-31',
            priority: 'High',
            checklist: ['Find musically inclined goldfish', 'Compose aquatic arias', 'Construct tiny underwater stage'],
            isComplete: false,
            note: 'Bubbles count as applause.',
        },
        {
            title: 'Prepare Stand-Up Comedy Routine for Job Interview',
            dueDate: '2024-01-03',
            priority: 'High',
            checklist: ['Write jokes about office culture', 'Practice impressions of CEO', 'Prepare for awkward silences'],
            isComplete: false,
            note: 'Don\'t forget to roast the competition (metaphorically).',
        },
        {
            title: 'Teach Car to Do Dog Tricks',
            dueDate: '2024-01-15',
            priority: 'Medium',
            checklist: ['Purchase oversized dog treats', 'Practice "roll over" with parking brake', 'Encourage fetching of spare tires'],
            isComplete: false,
            note: 'Avoid teaching "play dead" while driving.',
        },
        {
            title: 'Write Holiday Cards in Hieroglyphics',
            dueDate: '2023-12-23',
            priority: 'Medium',
            checklist: ['Master ancient Egyptian symbols', 'Carve messages into stone tablets', 'Hire carrier pigeons'],
            isComplete: false,
            note: 'Friends may need a decoder ring.',
        },
];

let todoList1 = dummyData1.map((curr) => new Todo(curr));
let todoList2 = dummyData2.map((curr) => new Todo(curr));
let todoList3 = dummyData3.map((curr) => new Todo(curr));

let defaultProjects = [new Project({title: 'Today',todoList: todoList1, type: 'default'}), new Project({title: 'Important',todoList: todoList2, type: 'default'}), 
                        new Project({title: 'Tasks', todoList: todoList3, type: 'default'})];

export default defaultProjects;