const roadmap = [
  {
    id: "ds",
    name: "Data Science",
    shortName: "DS",
    description: "From Python foundations to machine learning and SQL.",
    months: [
      {
        title: "Python + NumPy + Pandas + Mathematics I",
        groups: [
          { name: "Python", topics: ["Python Fundamentals", "Data Types", "Control Flow", "Functions", "Lists, Tuples, Sets & Dictionaries", "List & Dictionary Comprehensions", "File Handling", "Exception Handling", "OOP Fundamentals"] },
          { name: "NumPy", topics: ["NumPy Arrays", "Indexing & Slicing", "Reshaping", "Vectorization", "Broadcasting", "Aggregations", "Mathematical Operations", "Linear Algebra with NumPy"] },
          { name: "Pandas", topics: ["Series", "DataFrames", "Loading Datasets", "Selecting & Filtering", "Sorting", "Missing Values", "Duplicate Values", "Data Transformation", "GroupBy", "Merge / Join / Concatenate"] },
          { name: "Mathematics for ML I — Linear Algebra", topics: ["Scalars, Vectors & Matrices", "Vector Operations", "Dot Product", "Matrix Operations", "Matrix Multiplication", "Transpose", "Inverse", "Determinant", "Rank", "Eigenvalues & Eigenvectors"] },
        ],
      },
      {
        title: "Statistics + Probability + Mathematics II",
        groups: [
          { name: "Statistics", topics: ["Mean", "Median", "Mode", "Variance", "Standard Deviation", "Percentiles", "Quartiles", "Covariance", "Correlation", "Outliers", "Sampling", "Central Limit Theorem", "Confidence Intervals", "Hypothesis Testing", "p-values"] },
          { name: "Probability", topics: ["Probability Fundamentals", "Conditional Probability", "Bayes' Theorem", "Random Variables", "Probability Distributions", "Expected Value", "Variance"] },
          { name: "Mathematics for ML II — Calculus & Optimization", topics: ["Functions", "Limits — Intuition", "Derivatives", "Partial Derivatives", "Chain Rule", "Gradients", "Gradient Descent", "Optimization Intuition", "Loss Functions", "Maximum Likelihood Intuition"] },
          { name: "Visualization", topics: ["Matplotlib", "Seaborn", "Distribution Plots", "Relationship Plots", "Categorical Plots", "Basic EDA"] },
        ],
      },
      {
        title: "Classical Machine Learning",
        groups: [
          { name: "ML Fundamentals", topics: ["Machine Learning Fundamentals", "Supervised vs Unsupervised Learning", "Training / Validation / Test Sets", "Overfitting", "Underfitting", "Bias vs Variance", "Feature Engineering", "Feature Scaling", "Encoding Categorical Variables"] },
          { name: "Regression", topics: ["Linear Regression", "Multiple Linear Regression", "Ridge Regression", "Lasso Regression"] },
          { name: "Classification", topics: ["Logistic Regression", "K-Nearest Neighbors", "Naive Bayes", "Decision Trees", "Random Forest", "Support Vector Machines"] },
          { name: "Unsupervised Learning", topics: ["K-Means", "Hierarchical Clustering", "PCA"] },
          { name: "Model Evaluation", topics: ["MAE", "MSE", "RMSE", "R²", "Accuracy", "Precision", "Recall", "F1 Score", "Confusion Matrix", "ROC-AUC"] },
        ],
      },
      {
        title: "Advanced Machine Learning",
        groups: [
          { name: "Model Improvement", topics: ["Cross-Validation", "Hyperparameter Tuning", "Grid Search", "Random Search", "Feature Selection", "Advanced Feature Engineering"] },
          { name: "Ensemble Methods", topics: ["Bagging", "Boosting", "Gradient Boosting", "XGBoost"] },
          { name: "Practical ML", topics: ["Imbalanced Datasets", "Class Weights", "Sampling Techniques", "ML Pipelines", "Preprocessing Pipelines", "Model Interpretability", "Feature Importance"] },
          { name: "ML Concepts", topics: ["Bias-Variance Tradeoff", "Regularization", "Model Selection", "Data Leakage", "Error Analysis"] },
        ],
      },
      {
        title: "Deep Learning",
        groups: [
          { name: "Neural Network Fundamentals", topics: ["Perceptron", "Neurons", "Weights & Biases", "Activation Functions", "Forward Propagation", "Loss Functions", "Backpropagation", "Gradient Descent", "Learning Rate", "Epochs", "Batch Size"] },
          { name: "PyTorch", topics: ["Tensors", "Tensor Operations", "Datasets", "DataLoaders", "Building Neural Networks", "Training Loops", "Validation Loops", "GPU Basics"] },
          { name: "Neural Network Techniques", topics: ["Multilayer Perceptrons", "Dropout", "Batch Normalization", "Weight Initialization", "Learning Rate Scheduling", "Regularization"] },
          { name: "CNNs", topics: ["Convolution", "Filters", "Feature Maps", "Pooling", "CNN Architecture", "Image Classification"] },
          { name: "Sequence Models", topics: ["RNN Intuition", "LSTM Intuition", "GRU Intuition"] },
          { name: "Transformers", topics: ["Attention", "Self-Attention", "Embeddings", "Transformer Architecture"] },
        ],
      },
      {
        title: "SQL + Data Science Consolidation",
        groups: [
          { name: "SQL Fundamentals", topics: ["SELECT", "WHERE", "ORDER BY", "GROUP BY", "HAVING", "Aggregate Functions", "CASE Statements"] },
          { name: "Intermediate / Advanced SQL", topics: ["INNER / LEFT / RIGHT Joins", "Subqueries", "CTEs", "Window Functions", "Ranking Functions", "Running Totals", "Analytical Queries"] },
          { name: "Consolidation", topics: ["Python Revision", "NumPy Revision", "Pandas Revision", "Statistics Revision", "Probability Revision", "ML Mathematics Revision", "Classical ML Revision", "Advanced ML Revision", "Deep Learning Revision", "SQL Revision"] },
        ],
      },
    ],
  },
  {
    id: "dsa",
    name: "DSA",
    shortName: "DSA",
    description: "Build problem-solving fundamentals, one pattern at a time.",
    months: [
      { title: "Foundations + Arrays + Strings", topics: ["Python for DSA", "Big-O Notation", "Time Complexity", "Space Complexity", "Arrays / Lists", "Array Traversal", "Searching Basics", "Strings", "Frequency Counting", "Two Pointers", "Sliding Window", "Prefix Sum", "Kadane's Algorithm"] },
      { title: "Hashing + Searching + Sorting", topics: ["Hash Maps", "Hash Sets", "Frequency Maps", "Dictionary-Based Problems", "Linear Search", "Binary Search", "Binary Search Patterns", "Sorting Fundamentals", "Bubble Sort", "Selection Sort", "Insertion Sort", "Merge Sort", "Quick Sort", "Python Sorting"] },
      { title: "Linked Lists + Stack + Queue", topics: ["Linked List Fundamentals", "Singly Linked List", "Doubly Linked List", "Linked List Traversal", "Linked List Insertion", "Linked List Deletion", "Reverse Linked List", "Fast & Slow Pointers", "Stack", "Stack Applications", "Monotonic Stack Basics", "Queue", "Deque", "BFS Concept"] },
      { title: "Trees + Heaps", topics: ["Tree Fundamentals", "Binary Trees", "Binary Search Trees", "Tree Traversals", "Preorder", "Inorder", "Postorder", "Level Order Traversal", "DFS", "BFS", "Recursion with Trees", "Heap Fundamentals", "Min Heap", "Max Heap", "Priority Queue", "Top-K Problems"] },
      { title: "Graphs + Greedy", topics: ["Graph Fundamentals", "Graph Representation", "Adjacency List", "Adjacency Matrix", "Graph DFS", "Graph BFS", "Connected Components", "Cycle Detection", "Shortest Path Basics", "Greedy Algorithms", "Interval Problems", "Merge Intervals", "Activity Selection", "Jump Game"] },
      { title: "Dynamic Programming + Revision", topics: ["Dynamic Programming Fundamentals", "Memoization", "Tabulation", "1D Dynamic Programming", "2D Dynamic Programming Basics", "Climbing Stairs", "House Robber", "Coin Change", "Longest Common Subsequence", "DSA Pattern Revision", "Arrays & Strings Revision", "Hashing Revision", "Trees Revision", "Graphs Revision", "Final DSA Revision"] },
    ],
  },
];

const storageKey = "six-month-learning-tracker-progress";
const completed = new Set();
const topicIds = new Set();
const storageMessage = document.querySelector("#storage-message");

function topicId(trackId, monthIndex, topic, groupName = "topics") {
  const slug = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
  return `${trackId}_m${monthIndex + 1}_${slug(groupName)}_${slug(topic)}`;
}

function getTopics(month) {
  return month.groups
    ? month.groups.flatMap((group) => group.topics.map((topic) => ({ topic, groupName: group.name })))
    : month.topics.map((topic) => ({ topic, groupName: "Topics" }));
}

function readProgress() {
  try {
    const saved = localStorage.getItem(storageKey);
    if (!saved) return;
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) throw new TypeError("Saved progress must be a list.");
    for (const id of parsed) {
      if (typeof id !== "string") throw new TypeError("Saved progress contains an invalid topic.");
      if (topicIds.has(id)) completed.add(id);
    }
  } catch (error) {
    storageMessage.textContent = `Progress could not be loaded from this browser: ${error.message}`;
    storageMessage.classList.add("is-visible");
  }
}

function saveProgress() {
  try {
    localStorage.setItem(storageKey, JSON.stringify([...completed]));
    storageMessage.textContent = "";
    storageMessage.classList.remove("is-visible");
    return true;
  } catch (error) {
    storageMessage.textContent = `Progress could not be saved to this browser: ${error.message}`;
    storageMessage.classList.add("is-visible");
    return false;
  }
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
  text.textContent = topic;
  label.append(input, indicator, text);
  return label;
}

function renderMonth(track, month, monthIndex) {
  const details = document.createElement("details");
  details.className = "month-card";
  details.dataset.trackId = track.id;
  const summary = document.createElement("summary");
  summary.className = "month-summary";
  const number = document.createElement("span");
  number.className = "month-number";
  number.textContent = `0${monthIndex + 1}`;
  const titleBlock = document.createElement("span");
  titleBlock.className = "month-title-block";
  const monthTitle = document.createElement("span");
  monthTitle.className = "month-title";
  monthTitle.textContent = `Month ${monthIndex + 1}`;
  const monthSubtitle = document.createElement("span");
  monthSubtitle.className = "month-subtitle";
  monthSubtitle.textContent = month.title;
  titleBlock.append(monthTitle, monthSubtitle);
  const chevron = document.createElement("span");
  chevron.className = "month-chevron";
  chevron.setAttribute("aria-hidden", "true");
  summary.append(number, titleBlock, chevron);

  const progressArea = document.createElement("div");
  progressArea.className = "month-progress-area";
  const progressMeta = document.createElement("div");
  progressMeta.className = "month-progress-meta";
  const count = document.createElement("span");
  count.className = "month-count";
  const percentLabel = document.createElement("span");
  percentLabel.className = "month-percent";
  progressMeta.append(count, percentLabel);
  const progressTrack = document.createElement("div");
  progressTrack.className = "progress-track month-track";
  progressTrack.setAttribute("role", "progressbar");
  progressTrack.setAttribute("aria-valuemin", "0");
  progressTrack.setAttribute("aria-valuemax", "100");
  progressTrack.setAttribute("aria-label", `Month ${monthIndex + 1} progress`);
  const fill = document.createElement("div");
  fill.className = "progress-fill";
  progressTrack.append(fill);
  progressArea.append(progressMeta, progressTrack);
  const content = document.createElement("div");
  content.className = "month-content";

  if (month.groups) {
    for (const group of month.groups) {
      const section = document.createElement("section");
      section.className = "topic-group";
      const heading = document.createElement("h4");
      heading.textContent = group.name;
      const list = document.createElement("div");
      list.className = "topic-list";
      for (const topic of group.topics) {
        const id = topicId(track.id, monthIndex, topic, group.name);
        list.append(renderTopic(topic, id, track.id));
      }
      section.append(heading, list);
      content.append(section);
    }
  } else {
    const list = document.createElement("div");
    list.className = "topic-list dsa-topic-list";
    for (const topic of month.topics) {
      const id = topicId(track.id, monthIndex, topic);
      list.append(renderTopic(topic, id, track.id));
    }
    content.append(list);
  }

  details.append(summary, progressArea, content);
  details._progressElements = { count, percentLabel, fill, track: progressTrack };
  return details;
}

function renderTrack(track) {
  const card = document.createElement("section");
  card.className = `track-card track-${track.id}`;
  card.setAttribute("aria-labelledby", `${track.id}-heading`);
  const header = document.createElement("header");
  header.className = "track-header";
  const icon = document.createElement("span");
  icon.className = "track-icon";
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = track.shortName === "DS" ? "DS" : "D";
  const titleBlock = document.createElement("div");
  titleBlock.className = "track-title-block";
  const title = document.createElement("h3");
  title.id = `${track.id}-heading`;
  title.textContent = track.name;
  const description = document.createElement("p");
  description.textContent = track.description;
  titleBlock.append(title, description);
  header.append(icon, titleBlock);
  const months = document.createElement("div");
  months.className = "month-list";
  for (const [index, month] of track.months.entries()) {
    months.append(renderMonth(track, month, index));
  }
  card.append(header, months);
  return card;
}

function updateAllProgress() {
  let overallDone = 0;
  let overallTotal = 0;
  for (const track of roadmap) {
    let trackDone = 0;
    let trackTotal = 0;
    for (const [monthIndex, month] of track.months.entries()) {
      const topics = getTopics(month);
      const done = topics.filter(({ topic, groupName }) => completed.has(topicId(track.id, monthIndex, topic, groupName))).length;
      const total = topics.length;
      trackDone += done;
      trackTotal += total;
      const monthCard = document.querySelector(`.month-card[data-track-id="${track.id}"]:nth-child(${monthIndex + 1})`);
      const elements = monthCard._progressElements;
      elements.count.textContent = `${done} / ${total} completed`;
      elements.percentLabel.textContent = `${percentage(done, total)}%`;
      elements.fill.style.width = `${percentage(done, total)}%`;
      elements.track.setAttribute("aria-valuenow", percentage(done, total));
    }
    overallDone += trackDone;
    overallTotal += trackTotal;
    const trackPercent = document.querySelector(`#${track.id}-percent`);
    const trackBar = document.querySelector(`#${track.id}-bar`);
    const trackProgress = trackBar.parentElement;
    updateProgress(trackPercent, trackDone, trackTotal, trackBar, trackProgress);
  }
  updateProgress(
    document.querySelector("#overall-percent"),
    overallDone,
    overallTotal,
    document.querySelector("#overall-bar"),
    document.querySelector("#overall-bar").parentElement,
  );
  document.querySelector("#overall-count").textContent = `${overallDone} of ${overallTotal} topics completed`;
}

for (const track of roadmap) {
  for (const [monthIndex, month] of track.months.entries()) {
    for (const { topic, groupName } of getTopics(month)) topicIds.add(topicId(track.id, monthIndex, topic, groupName));
  }
}

readProgress();
const tracksContainer = document.querySelector("#tracks");
for (const track of roadmap) tracksContainer.append(renderTrack(track));
updateAllProgress();

tracksContainer.addEventListener("change", (event) => {
  const input = event.target;
  if (!(input instanceof HTMLInputElement) || !input.matches("[data-topic-id]")) return;
  if (input.checked) completed.add(input.dataset.topicId);
  else completed.delete(input.dataset.topicId);
  if (!saveProgress()) {
    input.checked = !input.checked;
    if (input.checked) completed.add(input.dataset.topicId);
    else completed.delete(input.dataset.topicId);
  }
  input.closest(".topic-row").classList.toggle("is-complete", input.checked);
  updateAllProgress();
});

const resetDialog = document.querySelector("#reset-dialog");
document.querySelector("#reset-progress").addEventListener("click", () => resetDialog.showModal());
document.querySelector("#confirm-reset").addEventListener("click", (event) => {
  event.preventDefault();
  const previous = new Set(completed);
  completed.clear();
  if (!saveProgress()) {
    for (const id of previous) completed.add(id);
    return;
  }
  for (const input of tracksContainer.querySelectorAll("[data-topic-id]")) {
    input.checked = false;
    input.closest(".topic-row").classList.remove("is-complete");
  }
  updateAllProgress();
  resetDialog.close();
});
