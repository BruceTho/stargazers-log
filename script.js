- fetch("events.json")
-   .then((response) => response.json())
+ fetch("events.json")
+   .then((response) => {
+     if (!response.ok) throw new Error("Could not load starred repositories");
+     return response.json();
+   })
+   .then((events) => {
+     if (!Array.isArray(events)) throw new Error("Unexpected data format");
+     // Render events...
+   })
+   .catch(() => {
+     // Show a readable error in the page.
+   });
