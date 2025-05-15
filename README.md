---

# 📘 Gradebook App

A simple JavaScript project that fulfills the user stories from the **FreeCodeCamp JavaScript Algorithms and Data Structures** certification lab. This app calculates class averages, assigns letter grades, checks for passing status, and returns formatted student messages.

---

## ✅ Project Objectives

The app implements the following **user stories**:

1. ✅ `getAverage(scores)` – Returns the average score from an array of test scores.
2. ✅ `getGrade(score)` – Returns the corresponding letter grade:

   * `100` → `"A+"`
   * `90–99` → `"A"`
   * `80–89` → `"B"`
   * `70–79` → `"C"`
   * `60–69` → `"D"`
   * `0–59` → `"F"`
3. ✅ `hasPassingGrade(score)` – Returns `true` if the score is passing (anything except `"F"`), `false` otherwise.
4. ✅ `studentMsg(totalScores, studentScore)` – Returns a message like:
   `"Class average: 85.4. Your grade: B. You passed the course."`
   or
   `"Class average: 52.6. Your grade: F. You failed the course."`

---

## 🚀 Usage

To use the functions, simply import or run the JavaScript code in your browser or a Node.js environment:

```javascript
console.log(studentMsg([90, 80, 70, 60, 100], 85));
// Output: Class average: 80.0. Your grade: B. You passed the course.
```

---

## 🧠 Technologies Used

* JavaScript (ES6+)
* Basic algorithm and control flow
* Functional programming approach

---

## 📂 Project Structure

```
gradebook-app/
├── README.md
└── index.js
```

---

## 📚 Learning Goals

This project helps reinforce the following JavaScript concepts:

* Writing pure functions
* Conditional logic
* Array iteration (`for...of`)
* String interpolation
* Clean, readable code

---

## 🏁 How to Run

1. Clone the repository or copy the script into your JS environment (e.g., CodePen, JSFiddle, VSCode).
2. Paste the code and run in browser console or terminal (Node.js).
3. Use the `studentMsg()` function with sample data to see results.

---

## 📌 Example Output

```javascript
studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100);
// Output: Class average: 50.8. Your grade: A+. You passed the course.
```

---

## 🙌 Acknowledgements

This solution was built as part of the **FreeCodeCamp JavaScript Algorithms and Data Structures** Certification.
Check out the full curriculum here: [https://www.freecodecamp.org/learn](https://www.freecodecamp.org/learn)

---

## 🧑‍💻 Author

**Tendai Gumunyu**
📫 [@costa\_developer on Instagram](https://instagram.com/costa_developer)

---
