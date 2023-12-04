(ns aoc2)

(let [->rgb (fn [line]
              (->> line
                   (re-seq #"(\d{1,2})\s(red|green|blue)")
                   (map (fn [[_ n c]] {(keyword c) (parse-long n)}))
                   (apply merge-with max)
                   ((juxt :red :green :blue))
                   ((fn [rgb] {:valid (every? true? (map <= rgb [12, 13, 14]))
                               :product (apply * rgb)}))))
      rgbs (map ->rgb (.split (slurp "2.txt") "\n"))
      ans1 (apply + (keep-indexed (fn [idx game] (when (:valid game) (inc idx))) rgbs))
      ans2 (apply + (map :product rgbs))]
  [ans1 ans2])
