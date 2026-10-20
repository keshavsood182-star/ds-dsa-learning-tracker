const priorityOrder = { Critical: 0, High: 1, Medium: 2, Secondary: 3 };
const weeklyHours = {
  1: "8-10 hrs", 2: "8-10 hrs", 3: "10-12 hrs", 4: "10-12 hrs",
  5: "10-12 hrs", 6: "12-14 hrs", 7: "10-12 hrs", 8: "10-12 hrs",
  9: "10-12 hrs", 10: "10-12 hrs", 11: "12-14 hrs", 12: "8-10 hrs",
  13: "10-12 hrs", 14: "8-10 hrs", 15: "8-10 hrs", 16: "10-12 hrs",
  17: "10-12 hrs", 18: "10-12 hrs",
};

function unit(skill, priority, topics) {
  return { skill, priority, topics };
}

function week(number, month, title, units, interview = "") {
  const interviewPractice = interview || (number >= 6 ? "Practice 3 role-relevant interview questions." : "");
  const weekUnits = number >= 6
    ? [...units, unit("Interview Preparation", "High", ["Complete weekly interview practice"])]
    : units;
  return {
    number,
    month,
    title,
    hours: weeklyHours[number] || "",
    interview: interviewPractice,
    topics: weekUnits.flatMap(({ skill, priority, topics }) =>
      topics.map((name) => ({ name, skill, priority })),
    ),
  };
}

const weeks = [
  week(1, 1, "Python Fundamentals", [
    unit("Python", "Critical", ["Python Fundamentals", "Python environment", "Variables", "Data types", "Operators", "Input and output", "Conditionals", "Loops", "Basic problem solving", "Functions", "Basic debugging"]),
  ]),
  week(2, 1, "Excel Fundamentals", [
    unit("Excel", "Critical", ["Excel interface", "Rows, columns and tables", "Cell references", "Relative and absolute references", "Basic formulas", "SUM", "AVERAGE", "COUNT and COUNTA", "IF", "AND and OR", "IFERROR", "Basic text functions", "Date functions", "Sorting", "Filtering", "Excel Tables"]),
  ]),
  week(3, 1, "Excel for Data Analysis", [
    unit("Excel", "Critical", ["XLOOKUP", "INDEX and MATCH", "SUMIFS", "COUNTIFS", "Pivot Tables", "Pivot Charts", "Conditional Formatting", "Data validation", "Removing duplicates", "Handling missing spreadsheet data", "Cleaning messy spreadsheets", "Basic business analysis", "Build a simple Excel dashboard"]),
  ]),
  week(4, 1, "SQL Fundamentals", [
    unit("SQL", "Critical", ["Databases and tables", "Primary and foreign keys", "SELECT", "WHERE", "ORDER BY", "LIMIT", "DISTINCT", "Aliases", "Arithmetic expressions", "CASE WHEN", "NULL and COALESCE", "Aggregate functions", "GROUP BY", "HAVING"]),
  ]),
  week(5, 2, "SQL Intermediate", [
    unit("SQL", "Critical", ["INNER JOIN", "LEFT JOIN", "RIGHT and FULL JOIN", "Multiple-table joins", "Self joins", "Join debugging", "Aggregations with joins", "CASE with aggregations", "Subqueries"]),
  ], "Practice 5 SQL interview questions."),
  week(6, 2, "Advanced SQL", [
    unit("Advanced SQL", "Medium", ["CTEs", "Window functions", "ROW_NUMBER", "RANK and DENSE_RANK", "LAG and LEAD", "PARTITION BY", "Running totals", "Moving averages", "Top-N problems", "SQL interview patterns"]),
  ], "Practice 5 SQL interview questions."),
  week(7, 2, "Pandas + NumPy", [
    unit("NumPy", "Critical", ["NumPy arrays", "Array operations", "Indexing", "Broadcasting"]),
    unit("Pandas", "Critical", ["Pandas Series", "DataFrames", "Read CSV and Excel", "Select columns", "Filter rows", "Sorting", "GroupBy and aggregations", "Apply", "Basic data transformations"]),
  ], "Practice Pandas interview questions."),
  week(8, 2, "Data Cleaning", [
    unit("Data Cleaning", "Critical", ["Missing values", "Duplicates", "Incorrect data types", "Outliers", "String cleaning", "Date and time cleaning", "Categorical data", "Merge and join", "Concatenation", "Pivot tables", "Data validation", "Reusable cleaning workflow"]),
    unit("Pandas", "Critical", ["Pandas data cleaning"]),
  ]),
  week(9, 2, "EDA + Visualization", [
    unit("EDA", "Critical", ["EDA workflow", "Univariate analysis", "Bivariate analysis", "Multivariate analysis", "Distributions", "Outliers and correlation"]),
    unit("Visualization", "High", ["Matplotlib", "Seaborn", "Histograms", "Bar and line charts", "Scatter and box plots", "Heatmaps", "Choose the right visualization", "Turn analysis into business insights"]),
  ]),
  week(10, 3, "Power BI Fundamentals", [
    unit("Power BI", "Critical", ["Power BI interface", "Import Excel and CSV data", "Power Query", "Data cleaning", "Data types", "Relationships", "Data model", "Basic charts and tables", "Cards and slicers", "Filters", "Dashboard layout"]),
  ], "Practice Power BI interview questions."),
  week(11, 3, "Power BI Intermediate", [
    unit("Power BI", "Critical", ["Power Query transformations", "Star schema basics", "Calculated columns", "Measures", "Basic DAX", "SUM and COUNT", "DISTINCTCOUNT", "CALCULATE", "Filter context", "Time-based analysis", "Interactive dashboards", "KPI cards and drill-down", "Dashboard storytelling"]),
  ]),
  week(12, 3, "Statistics for Data Analysis", [
    unit("Statistics", "Critical", ["Mean, median and mode", "Variance and standard deviation", "Percentiles, quartiles and IQR", "Distributions and skewness", "Covariance and correlation", "Sampling", "Central Limit Theorem", "Confidence intervals"]),
  ], "Practice statistics interview questions."),
  week(13, 3, "Probability + Hypothesis Testing", [
    unit("Statistics", "Critical", ["Probability basics", "Conditional probability", "Independence", "Bayes theorem", "Random variables and expected value", "Probability distributions", "Normal and binomial distributions", "Hypothesis testing", "Null and alternative hypotheses", "p-values", "Type I and Type II errors", "A/B testing"]),
    unit("SQL", "Critical", ["SQL case study practice"]),
  ]),
  week(14, 4, "ML Fundamentals", [
    unit("Machine Learning", "High", ["What is machine learning?", "Supervised learning", "Unsupervised learning", "Features and target", "Training, validation and test data", "Train/test split", "Overfitting and underfitting", "Bias and variance", "Data leakage"]),
    unit("SQL", "Critical", ["SQL interview practice"]),
  ]),
  week(15, 4, "Regression", [
    unit("Regression", "High", ["Linear regression", "Simple and multiple regression", "Cost function", "Gradient descent intuition", "MAE, MSE and RMSE", "R-squared", "Regression assumptions", "Model interpretation"]),
  ], "Practice regression interview questions."),
  week(16, 4, "Classification", [
    unit("Classification", "High", ["Classification", "Logistic regression", "Decision boundaries", "K-nearest neighbors", "Naive Bayes", "Confusion matrix", "Accuracy, precision and recall", "F1 and ROC-AUC", "Class imbalance"]),
  ]),
  week(17, 4, "Trees + Ensemble Models", [
    unit("Trees", "High", ["Decision trees", "Entropy and information gain", "Gini impurity", "Random forest", "Bagging", "Boosting", "Gradient boosting"]),
  ]),
  week(18, 4, "Feature Engineering + Model Evaluation", [
    unit("Feature Engineering", "High", ["Numerical and categorical features", "One-hot and label encoding", "Scaling and standardization", "Normalization", "Missing values and outlier handling", "Feature selection"]),
    unit("Model Evaluation", "High", ["Cross-validation", "K-fold and stratified CV", "Hyperparameter tuning", "Pipelines", "Model comparison"]),
  ], "Practice ML evaluation interview questions."),
  week(19, 5, "Data Analyst Project", [
    unit("SQL", "Critical", ["Analyze project data with SQL"]),
    unit("Portfolio", "High", ["Choose a realistic dataset and business problem", "Define business KPIs", "Clean data with Excel and Pandas", "Perform EDA and identify insights", "Build a Power BI dashboard", "Write business recommendations", "Publish project to GitHub", "Write project README"]),
  ]),
  week(20, 5, "Machine Learning Project", [
    unit("Portfolio", "High", ["Define an ML problem and dataset", "Clean data and perform EDA", "Engineer useful features", "Create train/test split and baseline", "Train and compare multiple models", "Evaluate and select final model", "Interpret model results", "Publish project to GitHub", "Write project README"]),
  ]),
  week(21, 5, "Unsupervised Learning", [
    unit("Unsupervised Learning", "Medium", ["Clustering", "K-Means", "Choosing K", "Elbow method", "Silhouette score", "Hierarchical clustering", "DBSCAN", "PCA and dimensionality reduction"]),
    unit("XGBoost", "Medium", ["XGBoost fundamentals"]),
  ]),
  week(22, 5, "DSA Interview Patterns", [
    unit("Core DSA", "Critical", ["Arrays", "Strings", "Hash maps", "Sets", "Two pointers", "Sliding window", "Sorting", "Binary search", "Stacks and queues", "Linked lists", "Trees", "Basic graphs"]),
    unit("Advanced DSA", "Medium", ["Recognize common interview patterns"]),
  ]),
  week(23, 6, "Git + GitHub + Portfolio", [
    unit("Git/GitHub", "High", ["Git basics", "GitHub repositories", "Branches", "Commits", "Pull requests", "README writing", "Project documentation", "Project screenshots and results", "Organize your portfolio"]),
    unit("Portfolio", "High", ["Review and polish project portfolio"]),
    unit("Deployment", "Secondary", ["FastAPI fundamentals", "Docker fundamentals", "Cloud deployment overview", "Advanced MLOps overview"]),
    unit("Advanced ML", "Secondary", ["Advanced ML overview", "Advanced deep learning overview", "NLP overview", "LLM engineering overview"]),
  ]),
  week(24, 6, "Resume + LinkedIn + Job Search", [
    unit("Applications", "High", ["Data Analyst and ML resume", "Write quantified project bullets", "LinkedIn and GitHub profile", "Find internships and job boards", "Cold applications and referrals", "Track internship applications"]),
  ]),
  week(25, 6, "Technical Interview Preparation", [
    unit("SQL", "Critical", ["Review joins, aggregations, CTEs and windows", "Solve SQL case studies"]),
    unit("Python", "Critical", ["Review data structures, functions and Pandas", "Practice basic coding"]),
    unit("Excel", "Critical", ["Review XLOOKUP, Pivot Tables, IF and SUMIFS", "Practice spreadsheet data cleaning"]),
    unit("Power BI", "Critical", ["Explain dashboards, DAX and data modeling"]),
    unit("Statistics", "Critical", ["Review probability, distributions, testing and A/B tests"]),
    unit("Machine Learning", "High", ["Review regression, classification, trees and evaluation"]),
    unit("Core DSA", "Critical", ["Review arrays, strings, hashing, binary search, trees and graph basics"]),
  ]),
  week(26, 6, "Mock Interviews + Final Readiness", [
    unit("Interview Preparation", "High", ["SQL mock interview", "Python interview", "Statistics interview", "ML interview", "DSA interview", "Explain your projects", "Resume walkthrough", "Behavioral questions and STAR method", "Mock interview", "Final portfolio audit", "Internship application sprint"]),
    unit("Applications", "High", ["Complete an internship application sprint"]),
  ]),
];

const dsaMonths = [
  { title: "Foundations + Arrays + Strings", topics: ["Python for DSA", "Big-O Notation", "Time Complexity", "Space Complexity", "Arrays / Lists", "Array Traversal", "Searching Basics", "Strings", "Frequency Counting", "Two Pointers", "Sliding Window", "Prefix Sum", "Kadane's Algorithm"] },
  { title: "Hashing + Searching + Sorting", topics: ["Hash Maps", "Hash Sets", "Frequency Maps", "Dictionary-Based Problems", "Linear Search", "Binary Search", "Binary Search Patterns", "Sorting Fundamentals", "Bubble Sort", "Selection Sort", "Insertion Sort", "Merge Sort", "Quick Sort", "Python Sorting"] },
  { title: "Linked Lists + Stack + Queue", topics: ["Linked List Fundamentals", "Singly Linked List", "Doubly Linked List", "Linked List Traversal", "Linked List Insertion", "Linked List Deletion", "Reverse Linked List", "Fast & Slow Pointers", "Stack", "Stack Applications", "Monotonic Stack Basics", "Queue", "Deque", "BFS Concept"] },
  { title: "Trees + Heaps", topics: ["Tree Fundamentals", "Binary Trees", "Binary Search Trees", "Tree Traversals", "Preorder", "Inorder", "Postorder", "Level Order Traversal", "DFS", "BFS", "Recursion with Trees", "Heap Fundamentals", "Min Heap", "Max Heap", "Priority Queue", "Top-K Problems"] },
  { title: "Graphs + Greedy", topics: ["Graph Fundamentals", "Graph Representation", "Adjacency List", "Adjacency Matrix", "Graph DFS", "Graph BFS", "Connected Components", "Cycle Detection", "Shortest Path Basics", "Greedy Algorithms", "Interval Problems", "Merge Intervals", "Activity Selection", "Jump Game"] },
  { title: "Dynamic Programming + Revision", topics: ["Dynamic Programming Fundamentals", "Memoization", "Tabulation", "1D Dynamic Programming", "2D Dynamic Programming Basics", "Climbing Stairs", "House Robber", "Coin Change", "Longest Common Subsequence", "DSA Pattern Revision", "Arrays & Strings Revision", "Hashing Revision", "Trees Revision", "Graphs Revision", "Final DSA Revision"] },
];

const storageKeys = {
  progress: "six-month-learning-tracker-progress",
  preferences: "six-month-learning-tracker-preferences",
  projects: "six-month-learning-tracker-projects",
  applications: "six-month-learning-tracker-applications",
};
const completed = new Set();
const topicById = new Map();
const storageMessage = document.querySelector("#storage-message");
const requiredProjects = [
  { id: "analyst", name: "Data Analyst Project", stack: ["SQL", "Excel", "Python/Pandas", "Power BI", "EDA", "Business insights", "GitHub", "README"] },
  { id: "ml", name: "Machine Learning Project", stack: ["Python", "Pandas", "EDA", "Feature engineering", "Scikit-learn", "Model evaluation", "GitHub", "README"] },
];
const applicationStatuses = ["Wishlist", "Applied", "OA / Assessment", "Interview", "Rejected", "Offer"];
const focusOrder = {
  analyst: ["SQL", "Excel", "Power BI", "Python", "Pandas", "Data Cleaning", "EDA", "Statistics", "Core DSA", "Advanced SQL", "Visualization", "Portfolio", "Git/GitHub", "Machine Learning"],
  ml: ["Python", "Core DSA", "Machine Learning", "Statistics", "SQL", "Pandas", "Data Cleaning", "EDA", "Git/GitHub", "Feature Engineering", "Model Evaluation", "Portfolio", "Deployment"],
};
let preferences = { role: "analyst", theme: "dark" };
let projectState = {};
let applications = [];

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
}

function topicId(weekNumber, topic) {
  return `ds_w${String(weekNumber).padStart(2, "0")}_${slug(topic.skill)}_${slug(topic.name)}`;
}

function dsaTopicId(monthIndex, topic) {
  return `dsa_m${monthIndex + 1}_topics_${slug(topic)}`;
}

function notifyStorageError(action, error) {
  storageMessage.textContent = `${action} could not be completed in this browser: ${error.message}`;
  storageMessage.classList.add("is-visible");
}

function saveJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    storageMessage.textContent = "";
    storageMessage.classList.remove("is-visible");
    return true;
  } catch (error) {
    notifyStorageError("Your data", error);
    return false;
  }
}

function loadJson(key, fallback, validate) {
  try {
    const saved = localStorage.getItem(key);
    if (!saved) return fallback;
    const value = JSON.parse(saved);
    if (!validate(value)) throw new TypeError("Saved data has an unexpected format.");
    return value;
  } catch (error) {
    notifyStorageError("Saved data", error);
    return fallback;
  }
}

function allDsaTopics() {
  return dsaMonths.flatMap((month, monthIndex) =>
    month.topics.map((topic) => ({ topic, monthIndex, id: dsaTopicId(monthIndex, topic) })),
  );
}

function priorityForDsaTopic(topic) {
  return /graph|tree|dynamic programming|heap|linked list|monotonic/i.test(topic) ? "Medium" : "Critical";
}

function allNewTopics() {
  return weeks.flatMap((currentWeek) =>
    currentWeek.topics.map((topic) => ({ topic, id: topicId(currentWeek.number, topic), track: "ds" })),
  ).concat(allDsaTopics().map(({ topic, id }) => ({
    topic: { name: topic, skill: "Core DSA", priority: priorityForDsaTopic(topic) },
    id,
    track: "dsa",
  })));
}

for (const item of allNewTopics()) topicById.set(item.id, item);

function loadPreferences() {
  preferences = loadJson(storageKeys.preferences, preferences, (value) =>
    value && ["analyst", "ml"].includes(value.role) && ["dark", "light"].includes(value.theme),
  );
}

function loadProgress() {
  const saved = loadJson(storageKeys.progress, [], Array.isArray);
  const legacySlugMap = new Map();
  for (const [id, item] of topicById) {
    const key = slug(item.topic.name);
    if (!legacySlugMap.has(key)) legacySlugMap.set(key, []);
    legacySlugMap.get(key).push(id);
  }
  for (const id of saved) {
    if (typeof id !== "string") continue;
    if (topicById.has(id)) {
      completed.add(id);
      continue;
    }
    const track = id.startsWith("dsa_") ? "dsa" : "ds";
    for (const [oldSlug, matchingIds] of legacySlugMap) {
      if (matchingIds.some((newId) => topicById.get(newId).track === track) && id.endsWith(`_${oldSlug}`)) {
        for (const newId of matchingIds) {
          if (topicById.get(newId).track === track) completed.add(newId);
        }
      }
    }
  }
  if (saved.some((id) => typeof id === "string" && !topicById.has(id))) {
    saveJson(storageKeys.progress, [...completed]);
  }
}

function loadExtras() {
  projectState = loadJson(storageKeys.projects, {}, (value) => value && typeof value === "object" && !Array.isArray(value));
  applications = loadJson(storageKeys.applications, [], Array.isArray).filter((item) => item && typeof item === "object");
}

function percentage(done, total) {
  return total === 0 ? 0 : Math.round((done / total) * 100);
}

function updateProgress(label, done, total, bar, progressbar) {
  const value = percentage(done, total);
  label.textContent = value;
  bar.style.width = `${value}%`;
  progressbar.setAttribute("aria-valuenow", value);
}

function renderTopic(topic, id, trackId) {
  const label = document.createElement("label");
  label.className = `topic-row${completed.has(id) ? " is-complete" : ""}`;
  label.htmlFor = id;
  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = id;
  input.checked = completed.has(id);
  input.dataset.topicId = id;
  input.dataset.trackId = trackId;
  const indicator = document.createElement("span");
  indicator.className = "checkbox-indicator";
  indicator.setAttribute("aria-hidden", "true");
  const text = document.createElement("span");
  text.className = "topic-name";
  text.textContent = topic.name;
  const meta = document.createElement("span");
  meta.className = "topic-meta";
  const skill = document.createElement("span");
  skill.className = "topic-skill";
  skill.textContent = topic.skill;
  const badge = document.createElement("span");
  badge.className = `priority-badge priority-${slug(topic.priority)}`;
  badge.textContent = topic.priority;
  label.append(input, indicator, text, skill, badge);
  return label;
}

function renderWeek(currentWeek) {
  const details = document.createElement("details");
  details.className = "week-card";
  details.dataset.week = currentWeek.number;
  const summary = document.createElement("summary");
  const number = document.createElement("span");
  number.className = "week-number";
  number.textContent = `W${String(currentWeek.number).padStart(2, "0")}`;
  const title = document.createElement("span");
  title.className = "week-title";
  title.textContent = currentWeek.title;
  const estimate = document.createElement("span");
  estimate.className = "week-estimate";
  estimate.textContent = currentWeek.hours || `Week ${currentWeek.number}`;
  summary.append(number, title, estimate);
  const content = document.createElement("div");
  content.className = "week-content";
  const topicList = document.createElement("div");
  topicList.className = "topic-list";
  for (const topic of currentWeek.topics) topicList.append(renderTopic(topic, topicId(currentWeek.number, topic), "ds"));
  content.append(topicList);
  if (currentWeek.interview) {
    const interview = document.createElement("p");
    interview.className = "interview-prompt";
    interview.textContent = `Interview practice · ${currentWeek.interview}`;
    content.append(interview);
  }
  details.append(summary, content);
  return details;
}

function renderDSARoadmap() {
  const track = document.createElement("section");
  track.className = "track-card track-dsa";
  track.setAttribute("aria-labelledby", "dsa-heading");
  const header = document.createElement("header");
  header.className = "track-header";
  const icon = document.createElement("span");
  icon.className = "track-icon";
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = "D";
  const title = document.createElement("div");
  title.className = "track-title-block";
  const heading = document.createElement("h3");
  heading.id = "dsa-heading";
  heading.textContent = "DSA · parallel track";
  const description = document.createElement("p");
  description.textContent = "Keep problem-solving moving alongside data skills; depth depends on your target role.";
  title.append(heading, description);
  header.append(icon, title);
  const profile = document.createElement("div");
  profile.className = "dsa-profile";
  const label = document.createElement("span");
  label.textContent = "Data Analyst · Low–Medium";
  const mlLabel = document.createElement("span");
  mlLabel.textContent = "ML Engineer · Medium–High";
  profile.append(label, mlLabel);
  const focus = document.createElement("p");
  focus.className = "dsa-role-focus";
  focus.id = "dsa-role-focus";
  const months = document.createElement("div");
  months.className = "month-list";
  for (const [monthIndex, month] of dsaMonths.entries()) {
    const details = document.createElement("details");
    details.className = "month-card dsa-month";
    const summary = document.createElement("summary");
    const monthNumber = document.createElement("span");
    monthNumber.className = "month-number";
    monthNumber.textContent = `0${monthIndex + 1}`;
    const monthName = document.createElement("span");
    monthName.className = "dsa-month-title";
    monthName.textContent = `Month ${monthIndex + 1} · ${month.title}`;
    summary.append(monthNumber, monthName);
    const list = document.createElement("div");
    list.className = "topic-list dsa-topic-list";
    for (const topic of month.topics) {
      const item = { name: topic, skill: "Core DSA", priority: priorityForDsaTopic(topic) };
      list.append(renderTopic(item, dsaTopicId(monthIndex, topic), "dsa"));
    }
    details.append(summary, list);
    months.append(details);
  }
  track.append(header, profile, focus, months);
  return track;
}

function renderRoadmap() {
  const container = document.querySelector("#tracks");
  const mainTrack = document.createElement("section");
  mainTrack.className = "track-card track-ds";
  mainTrack.setAttribute("aria-labelledby", "roadmap-heading");
  const header = document.createElement("header");
  header.className = "track-header";
  const icon = document.createElement("span");
  icon.className = "track-icon";
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = "DA";
  const title = document.createElement("div");
  title.className = "track-title-block";
  const heading = document.createElement("h3");
  heading.id = "roadmap-heading";
  heading.textContent = "Internship-first roadmap";
  const description = document.createElement("p");
  description.textContent = "26 weeks from foundations to projects, interviews, and applications.";
  title.append(heading, description);
  header.append(icon, title);
  const months = document.createElement("div");
  months.className = "month-list";
  const monthNames = ["Data Foundations", "SQL + Data Analysis", "Power BI + Statistics", "Machine Learning + DSA", "Projects + DSA", "Portfolio + Applications"];
  for (let month = 1; month <= 6; month += 1) {
    const monthWeeks = weeks.filter((currentWeek) => currentWeek.month === month);
    const details = document.createElement("details");
    details.className = "month-card roadmap-month";
    if (month === 1) details.open = true;
    const summary = document.createElement("summary");
    summary.className = "month-summary";
    const number = document.createElement("span");
    number.className = "month-number";
    number.textContent = `0${month}`;
    const titleBlock = document.createElement("span");
    titleBlock.className = "month-title-block";
    const monthTitle = document.createElement("span");
    monthTitle.className = "month-title";
    monthTitle.textContent = `Month ${month} · ${monthNames[month - 1]}`;
    const weekRange = document.createElement("span");
    weekRange.className = "month-subtitle";
    weekRange.textContent = `Weeks ${monthWeeks[0].number}–${monthWeeks[monthWeeks.length - 1].number}`;
    titleBlock.append(monthTitle, weekRange);
    summary.append(number, titleBlock);
    const list = document.createElement("div");
    list.className = "week-list";
    for (const currentWeek of monthWeeks) list.append(renderWeek(currentWeek));
    details.append(summary, list);
    months.append(details);
  }
  mainTrack.append(header, months);
  container.append(mainTrack, renderDSARoadmap());
}

function skillSummary() {
  const stats = new Map();
  for (const item of topicById.values()) {
    const { skill, priority } = item.topic;
    if (!stats.has(skill)) stats.set(skill, { skill, priority, done: 0, total: 0, items: [] });
    const record = stats.get(skill);
    record.total += 1;
    record.items.push(item);
    if (completed.has(item.id)) record.done += 1;
    if (priorityOrder[priority] < priorityOrder[record.priority]) record.priority = priority;
  }
  return stats;
}

function roleSkillOrder() {
  return focusOrder[preferences.role];
}

function incompleteSkills() {
  const stats = skillSummary();
  return [...stats.values()]
    .filter((item) => item.done < item.total)
    .sort((a, b) => {
      const priorityDiff = priorityOrder[a.priority] - priorityOrder[b.priority];
      if (priorityDiff !== 0) return priorityDiff;
      const order = roleSkillOrder();
      const aIndex = order.indexOf(a.skill);
      const bIndex = order.indexOf(b.skill);
      return (aIndex < 0 ? 999 : aIndex) - (bIndex < 0 ? 999 : bIndex);
    });
}

function findIncompleteTopic(skill, excluded = new Set()) {
  for (const currentWeek of weeks) {
    for (const topic of currentWeek.topics) {
      const id = topicId(currentWeek.number, topic);
      if (topic.skill === skill && !completed.has(id) && !excluded.has(id)) return { topic, id, week: currentWeek.number };
    }
  }
  return null;
}

function renderSkills() {
  const container = document.querySelector("#skill-stack");
  container.replaceChildren();
  const stats = skillSummary();
  const analystSkills = ["SQL", "Excel", "Power BI", "Python", "Pandas", "Data Cleaning", "EDA", "Statistics", "Core DSA", "Advanced SQL", "Visualization", "Portfolio", "Git/GitHub", "Machine Learning"];
  const mlSkillsForRole = ["Python", "Core DSA", "Machine Learning", "Regression", "Classification", "Trees", "Feature Engineering", "Model Evaluation", "SQL", "NumPy", "Pandas", "EDA", "Statistics", "Git/GitHub", "Portfolio", "Deployment"];
  const roleSkills = preferences.role === "analyst" ? analystSkills : mlSkillsForRole;
  for (const skill of roleSkills) {
    const record = stats.get(skill);
    const total = record ? record.total : 0;
    const done = record ? record.done : 0;
    const value = percentage(done, total);
    const row = document.createElement("div");
    row.className = "skill-row";
    const meta = document.createElement("div");
    meta.className = "skill-row-meta";
    const name = document.createElement("span");
    name.textContent = skill;
    const percent = document.createElement("strong");
    percent.textContent = `${value}%`;
    const badge = document.createElement("span");
    const priority = record ? record.priority : (skill === "Core DSA" ? "Critical" : "High");
    badge.className = `priority-badge priority-${slug(priority)}`;
    badge.textContent = priority;
    const roleTag = document.createElement("span");
    roleTag.className = "role-skill-tag";
    const isShared = analystSkills.includes(skill) && mlSkillsForRole.includes(skill);
    roleTag.textContent = isShared ? "Common" : preferences.role === "analyst" ? "DA focus" : "ML focus";
    meta.append(name, roleTag, badge, percent);
    const bar = document.createElement("div");
    bar.className = "skill-meter";
    bar.setAttribute("role", "progressbar");
    bar.setAttribute("aria-label", `${skill} completion`);
    bar.setAttribute("aria-valuemin", "0");
    bar.setAttribute("aria-valuemax", "100");
    bar.setAttribute("aria-valuenow", value);
    const fill = document.createElement("span");
    fill.style.width = `${value}%`;
    bar.append(fill);
    row.append(meta, bar);
    container.append(row);
  }
  const mlSkills = ["Machine Learning", "Regression", "Classification", "Trees", "Feature Engineering", "Model Evaluation", "XGBoost", "Deployment", "Advanced ML"];
  const mlContainer = document.querySelector("#ml-skill-list");
  mlContainer.replaceChildren();
  for (const skill of mlSkills) {
    const record = stats.get(skill);
    const item = document.createElement("span");
    item.className = "ml-skill-chip";
    item.textContent = `${skill} ${record ? `${percentage(record.done, record.total)}%` : "0%"}`;
    mlContainer.append(item);
  }
}

function renderPriorityQueue() {
  const container = document.querySelector("#priority-list");
  container.replaceChildren();
  const highest = incompleteSkills().slice(0, 5);
  if (highest.length === 0) {
    container.textContent = "You’ve completed all current roadmap skills. Keep practicing and applying.";
    return;
  }
  highest.forEach((item, index) => {
    const row = document.createElement("li");
    const label = document.createElement("span");
    label.textContent = item.skill;
    const badge = document.createElement("span");
    badge.className = `priority-badge priority-${slug(item.priority)}`;
    badge.textContent = item.priority;
    row.append(label, badge);
    container.append(row);
  });
}

function renderFocus() {
  const list = document.querySelector("#focus-list");
  list.replaceChildren();
  const prioritySkill = incompleteSkills()[0];
  const selected = [];
  if (prioritySkill) {
    const item = findIncompleteTopic(prioritySkill.skill);
    if (item) selected.push({ type: "Primary", title: `${item.topic.skill} — ${item.topic.name}`, detail: `Week ${item.week} · ${item.topic.priority}` });
  }
  const primaryId = selected.length ? selected[0].title : "";
  const upcoming = weeks.flatMap((currentWeek) => currentWeek.topics.map((topic) => ({
    topic, id: topicId(currentWeek.number, topic), week: currentWeek.number,
  }))).find((item) => !completed.has(item.id) && `${item.topic.skill} — ${item.topic.name}` !== primaryId);
  if (upcoming) selected.push({ type: "Next on roadmap", title: `${upcoming.topic.skill} — ${upcoming.topic.name}`, detail: `Week ${upcoming.week} · ${upcoming.topic.priority}` });
  const dsaNext = allDsaTopics().find((item) => !completed.has(item.id));
  if (dsaNext) selected.push({ type: "DSA · parallel", title: dsaNext.topic, detail: preferences.role === "analyst" ? "Low–Medium emphasis for your role" : "Medium–High emphasis for your role" });
  if (!selected.length) {
    list.textContent = "All roadmap topics are complete. Review projects and practice mock interviews.";
    return;
  }
  for (const [index, focus] of selected.slice(0, 3).entries()) {
    const item = document.createElement("li");
    item.className = `focus-item focus-${index}`;
    const kind = document.createElement("span");
    kind.className = "focus-kind";
    kind.textContent = focus.type;
    const title = document.createElement("strong");
    title.textContent = focus.title;
    const detail = document.createElement("span");
    detail.className = "focus-detail";
    detail.textContent = focus.detail;
    item.append(kind, title, detail);
    list.append(item);
  }
}

function projectChecked(projectId, requirement) {
  return Boolean(projectState[projectId] && projectState[projectId][slug(requirement)]);
}

function renderProjects() {
  const container = document.querySelector("#projects");
  container.replaceChildren();
  for (const project of requiredProjects) {
    const card = document.createElement("section");
    card.className = "project-card";
    const title = document.createElement("h3");
    title.textContent = project.name;
    const count = project.stack.filter((requirement) => projectChecked(project.id, requirement)).length;
    const progress = document.createElement("p");
    progress.className = "project-progress";
    progress.textContent = `${count} of ${project.stack.length} milestones`;
    const list = document.createElement("div");
    list.className = "project-checklist";
    for (const requirement of project.stack) {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "checkbox";
      input.checked = projectChecked(project.id, requirement);
      input.dataset.project = project.id;
      input.dataset.requirement = requirement;
      const text = document.createElement("span");
      text.textContent = requirement;
      label.append(input, text);
      list.append(label);
    }
    card.append(title, progress, list);
    container.append(card);
  }
  const optional = document.createElement("p");
  optional.className = "optional-project";
  optional.textContent = "Optional later: an advanced ML / end-to-end deployment project. It is not required for readiness.";
  container.append(optional);
}

const readiness = {
  analyst: {
    weights: [
      ["Foundation", 30, ["Python", "Excel", "SQL"]],
      ["Data analysis + BI", 25, ["Pandas", "Data Cleaning", "EDA", "Visualization", "Power BI"]],
      ["Statistics", 10, ["Statistics"]],
      ["Projects / portfolio", 15, ["Portfolio"]],
      ["Interview preparation", 10, ["Interview Preparation"]],
      ["Applications", 10, ["Applications"]],
    ],
  },
  ml: {
    weights: [
      ["Python + DSA", 20, ["Python", "Core DSA"]],
      ["Data + SQL", 15, ["SQL", "NumPy", "Pandas", "Data Cleaning", "EDA"]],
      ["Machine learning", 25, ["Machine Learning", "Regression", "Classification", "Trees", "Feature Engineering", "Model Evaluation"]],
      ["Projects / portfolio", 15, ["Portfolio"]],
      ["Engineering / deployment", 10, ["Git/GitHub"]],
      ["Interview preparation", 10, ["Interview Preparation"]],
      ["Applications", 5, ["Applications"]],
    ],
  },
};

function skillCompletion(skill) {
  if (skill === "Portfolio") {
    const projectDone = requiredProjects.reduce((sum, project) =>
      sum + project.stack.filter((requirement) => projectChecked(project.id, requirement)).length,
    0);
    const total = requiredProjects.reduce((sum, project) => sum + project.stack.length, 0);
    const resumeTopic = weeks.flatMap((currentWeek) => currentWeek.topics.map((topic) => ({
      currentWeek, topic,
    }))).find(({ topic }) => topic.name === "Data Analyst and ML resume");
    const resumeDone = resumeTopic && completed.has(topicId(resumeTopic.currentWeek.number, resumeTopic.topic));
    return percentage(projectDone + Number(Boolean(resumeDone)), total + 1);
  }
  if (skill === "Applications") {
    const applied = applications.filter((application) => application.status !== "Wishlist").length;
    return percentage(Math.min(applied, 50), 50);
  }
  if (skill === "Interview Preparation") {
    const total = weeks.filter((currentWeek) => currentWeek.interview).length;
    const done = weeks.filter((currentWeek) => currentWeek.interview && currentWeek.topics.some((topic) =>
      /interview|practice/i.test(topic.name) && completed.has(topicId(currentWeek.number, topic)),
    )).length;
    return percentage(done, total);
  }
  const record = skillSummary().get(skill);
  return record ? percentage(record.done, record.total) : 0;
}

function readinessBreakdown() {
  return readiness[preferences.role].weights.map(([name, weight, skills]) => {
    let score;
    if (name === "Applications") {
      const submitted = applications.filter((application) => application.status !== "Wishlist").length;
      const milestones = Math.min(1, submitted > 0) + Math.min(1, submitted >= 10) + Math.min(1, submitted >= 25) + Math.min(1, submitted >= 50)
        + Math.min(1, applications.some((application) => application.status === "Interview" || application.interviewDate))
        + Math.min(1, applications.some((application) => application.status === "Offer"));
      score = Math.round((milestones / 6) * 100);
    } else {
      score = Math.round(skills.reduce((sum, skill) => sum + skillCompletion(skill), 0) / skills.length);
    }
    return { name, weight, score, skills };
  });
}

function renderReadiness() {
  const breakdown = readinessBreakdown();
  const score = Math.round(breakdown.reduce((sum, item) => sum + item.score * item.weight, 0) / 100);
  document.querySelector("#readiness-score").textContent = `${score}%`;
  const bar = document.querySelector("#readiness-bar");
  bar.style.width = `${score}%`;
  bar.parentElement.setAttribute("aria-valuenow", score);
  const container = document.querySelector("#readiness-breakdown");
  container.replaceChildren();
  for (const item of breakdown) {
    const row = document.createElement("div");
    row.className = "readiness-row";
    const meta = document.createElement("div");
    meta.className = "readiness-meta";
    const name = document.createElement("span");
    name.textContent = `${item.name} · ${item.weight}%`;
    const value = document.createElement("strong");
    value.textContent = `${item.score}%`;
    meta.append(name, value);
    const skills = document.createElement("p");
    skills.className = "readiness-skills";
    skills.textContent = item.skills.join(" · ");
    const meter = document.createElement("div");
    meter.className = "skill-meter";
    const fill = document.createElement("span");
    fill.style.width = `${item.score}%`;
    meter.append(fill);
    row.append(meta, skills, meter);
    container.append(row);
  }
}

function renderApplications() {
  const list = document.querySelector("#application-list");
  list.replaceChildren();
  const submittedCount = applications.filter((application) => application.status !== "Wishlist").length;
  const firstInterview = applications.some((application) => application.status === "Interview" || application.interviewDate);
  const firstOffer = applications.some((application) => application.status === "Offer");
  const milestones = [
    ["Applications started", submittedCount > 0],
    ["10 applications", submittedCount >= 10],
    ["25 applications", submittedCount >= 25],
    ["50 applications", submittedCount >= 50],
    ["First interview", firstInterview],
    ["First offer", firstOffer],
  ];
  const milestoneList = document.querySelector("#application-milestones");
  milestoneList.replaceChildren();
  for (const [label, done] of milestones) {
    const item = document.createElement("li");
    item.className = done ? "is-done" : "";
    item.textContent = `${done ? "✓" : "○"} ${label}`;
    milestoneList.append(item);
  }
  document.querySelector("#application-count").textContent = `${submittedCount} submitted application${submittedCount === 1 ? "" : "s"}`;
  if (!applications.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "Add an opportunity to start tracking your applications.";
    list.append(empty);
    return;
  }
  for (const [index, application] of applications.entries()) {
    const row = document.createElement("article");
    row.className = "application-row";
    const details = document.createElement("div");
    details.className = "application-details";
    const company = document.createElement("strong");
    company.textContent = application.company || "Company";
    const role = document.createElement("span");
    role.textContent = `${application.role || "Role"} · Applied ${application.dateApplied || "date not set"}`;
    const extra = document.createElement("small");
    const extras = [application.resumeVersion, application.interviewDate ? `Interview ${application.interviewDate}` : "", application.notes].filter(Boolean);
    extra.textContent = extras.join(" · ");
    details.append(company, role);
    if (extras.length) details.append(extra);
    const status = document.createElement("select");
    status.setAttribute("aria-label", `Status for ${application.company || "application"}`);
    status.dataset.applicationStatus = index;
    for (const optionName of applicationStatuses) {
      const option = document.createElement("option");
      option.value = optionName;
      option.textContent = optionName;
      option.selected = (application.status || "Wishlist") === optionName;
      status.append(option);
    }
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "remove-application";
    remove.dataset.removeApplication = index;
    remove.setAttribute("aria-label", `Remove ${application.company || "application"}`);
    remove.textContent = "Remove";
    row.append(details, status, remove);
    if (application.jobLink) {
      const link = document.createElement("a");
      link.href = application.jobLink;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "Job link";
      link.className = "job-link";
      row.append(link);
    }
    list.append(row);
  }
}

function renderAll() {
  updateAllProgress();
  renderSkills();
  renderPriorityQueue();
  renderFocus();
  renderProjects();
  renderReadiness();
  renderApplications();
  document.querySelector("#role-analyst").setAttribute("aria-pressed", String(preferences.role === "analyst"));
  document.querySelector("#role-ml").setAttribute("aria-pressed", String(preferences.role === "ml"));
  document.querySelector("#role-label").textContent = preferences.role === "analyst" ? "Data Analyst" : "ML / Data Science Engineer";
  document.querySelector("#role-label-readiness").textContent = preferences.role === "analyst" ? "Data Analyst" : "ML Engineer";
  document.body.dataset.theme = preferences.theme;
  document.querySelector("#theme-toggle").textContent = preferences.theme === "dark" ? "Light mode" : "Dark mode";
  document.querySelector("#dsa-role-focus").textContent = preferences.role === "analyst"
    ? "Your focus: arrays, strings, hashing, sorting, two pointers, basic binary search, and problem solving."
    : "Your focus: arrays, strings, hashing, two pointers, sliding window, binary search, lists, stacks, trees, graphs, and basic DP.";
}

function updateAllProgress() {
  let overallDone = 0;
  let overallTotal = 0;
  let dataDone = 0;
  let dataTotal = 0;
  let dsaDone = 0;
  let dsaTotal = 0;
  for (const currentWeek of weeks) {
    for (const topic of currentWeek.topics) {
      dataTotal += 1;
      overallTotal += 1;
      if (completed.has(topicId(currentWeek.number, topic))) {
        dataDone += 1;
        overallDone += 1;
      }
    }
  }
  for (const item of allDsaTopics()) {
    dsaTotal += 1;
    overallTotal += 1;
    if (completed.has(item.id)) {
      dsaDone += 1;
      overallDone += 1;
    }
  }
  updateProgress(document.querySelector("#overall-percent"), overallDone, overallTotal, document.querySelector("#overall-bar"), document.querySelector("#overall-bar").parentElement);
  updateProgress(document.querySelector("#ds-percent"), dataDone, dataTotal, document.querySelector("#ds-bar"), document.querySelector("#ds-bar").parentElement);
  updateProgress(document.querySelector("#dsa-percent"), dsaDone, dsaTotal, document.querySelector("#dsa-bar"), document.querySelector("#dsa-bar").parentElement);
  document.querySelector("#overall-count").textContent = `${overallDone} of ${overallTotal} topics completed`;
}

function bindEvents() {
  document.querySelector("#tracks").addEventListener("change", (event) => {
    const input = event.target;
    if (!(input instanceof HTMLInputElement) || !input.matches("[data-topic-id]")) return;
    const previous = completed.has(input.dataset.topicId);
    if (input.checked) completed.add(input.dataset.topicId);
    else completed.delete(input.dataset.topicId);
    if (!saveJson(storageKeys.progress, [...completed])) {
      if (previous) completed.add(input.dataset.topicId);
      else completed.delete(input.dataset.topicId);
      input.checked = previous;
      return;
    }
    input.closest(".topic-row").classList.toggle("is-complete", input.checked);
    renderAll();
  });

  document.querySelector("#role-analyst").addEventListener("click", () => setRole("analyst"));
  document.querySelector("#role-ml").addEventListener("click", () => setRole("ml"));
  document.querySelector("#theme-toggle").addEventListener("click", () => {
    const next = { ...preferences, theme: preferences.theme === "dark" ? "light" : "dark" };
    if (saveJson(storageKeys.preferences, next)) {
      preferences = next;
      renderAll();
    }
  });
  document.querySelector("#curriculum-search").addEventListener("input", (event) => filterCurriculum(event.target.value));

  document.querySelector("#projects").addEventListener("change", (event) => {
    const input = event.target;
    if (!(input instanceof HTMLInputElement) || !input.dataset.project) return;
    const next = { ...projectState, [input.dataset.project]: { ...projectState[input.dataset.project], [slug(input.dataset.requirement)]: input.checked } };
    if (saveJson(storageKeys.projects, next)) {
      projectState = next;
      renderAll();
    } else {
      input.checked = !input.checked;
    }
  });

  document.querySelector("#application-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const application = {
      company: data.get("company").trim(),
      role: data.get("role").trim(),
      dateApplied: data.get("dateApplied"),
      status: data.get("status"),
      jobLink: data.get("jobLink").trim(),
      resumeVersion: data.get("resumeVersion").trim(),
      interviewDate: data.get("interviewDate"),
      notes: data.get("notes").trim(),
    };
    if (!application.company || !application.role) return;
    const next = [...applications, application];
    if (saveJson(storageKeys.applications, next)) {
      applications = next;
      form.reset();
      form.elements.dateApplied.value = new Date().toISOString().slice(0, 10);
      renderAll();
    }
  });

  document.querySelector("#application-list").addEventListener("change", (event) => {
    const select = event.target;
    if (!(select instanceof HTMLSelectElement) || select.dataset.applicationStatus === undefined) return;
    const index = Number(select.dataset.applicationStatus);
    const next = applications.map((application, itemIndex) => itemIndex === index ? { ...application, status: select.value } : application);
    if (saveJson(storageKeys.applications, next)) {
      applications = next;
      renderAll();
    }
  });
  document.querySelector("#application-list").addEventListener("click", (event) => {
    const button = event.target.closest("[data-remove-application]");
    if (!button) return;
    const index = Number(button.dataset.removeApplication);
    const next = applications.filter((_, itemIndex) => itemIndex !== index);
    if (saveJson(storageKeys.applications, next)) {
      applications = next;
      renderAll();
    }
  });

  const resetDialog = document.querySelector("#reset-dialog");
  document.querySelector("#reset-progress").addEventListener("click", () => resetDialog.showModal());
  document.querySelector("#confirm-reset").addEventListener("click", (event) => {
    event.preventDefault();
    const previous = new Set(completed);
    completed.clear();
    if (!saveJson(storageKeys.progress, [])) {
      for (const id of previous) completed.add(id);
      return;
    }
    for (const input of document.querySelectorAll("[data-topic-id]")) {
      input.checked = false;
      input.closest(".topic-row").classList.remove("is-complete");
    }
    renderAll();
    resetDialog.close();
  });
}

function setRole(role) {
  const next = { ...preferences, role };
  if (saveJson(storageKeys.preferences, next)) {
    preferences = next;
    renderAll();
  }
}

function filterCurriculum(query) {
  const normalized = query.trim().toLowerCase();
  for (const row of document.querySelectorAll(".topic-row")) {
    const matches = !normalized || row.textContent.toLowerCase().includes(normalized);
    row.hidden = !matches;
  }
  for (const weekCard of document.querySelectorAll(".week-card")) {
    const hasMatch = [...weekCard.querySelectorAll(".topic-row")].some((row) => !row.hidden);
    weekCard.hidden = Boolean(normalized) && !hasMatch;
    if (normalized && hasMatch) weekCard.open = true;
  }
  for (const monthCard of document.querySelectorAll(".roadmap-month, .dsa-month")) {
    const hasMatch = [...monthCard.querySelectorAll(".topic-row")].some((row) => !row.hidden);
    monthCard.hidden = Boolean(normalized) && !hasMatch;
    if (normalized && hasMatch) monthCard.open = true;
  }
  document.querySelector("#search-empty").hidden = !normalized || [...document.querySelectorAll(".topic-row")].some((row) => !row.hidden);
}

loadPreferences();
loadProgress();
loadExtras();
renderRoadmap();
renderAll();
bindEvents();

document.querySelector("#application-form").elements.dateApplied.value = new Date().toISOString().slice(0, 10);
