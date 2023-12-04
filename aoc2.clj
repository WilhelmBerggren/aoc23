(ns aoc2)

(defn ->rgb [line]
  (->> line
       (re-seq #"(\d{1,2})\s(red|green|blue)")
       (map (fn [[_ n c]] (sorted-map (keyword c) (parse-long n))))
       (apply merge-with max)
       ((juxt :red :green :blue))))

(let [rgbs (map ->rgb (.split (slurp "2.txt") "\n"))
      ans1 (apply + (keep-indexed (fn [idx game] (when (every? true? (map <= game [12, 13, 14])) (inc idx))) rgbs))
      ans2 (apply + (map (partial apply *) rgbs))]
  [ans1 ans2])
