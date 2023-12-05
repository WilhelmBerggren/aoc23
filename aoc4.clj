(ns aoc4 (:require [clojure.string :as str]))

(defn line->points [line]
  (let [[_ s] (str/split line #":\s+")
        parts (str/split s #"\|\s+")
        [one two] (map #(map parse-long (str/split % #"\s+")) parts)
        counts (frequencies (concat one two))
        twos (filter #(= 2 (counts %)) (keys counts))]
    (count twos)))

(def points (->> (.split (slurp "4.txt") "\n")
                 (map line->points)))

(defn recurse-points [idx]
  (let [p (nth points idx)
        idxs (map (partial + (inc idx)) (range p))
        calculate (partial mapcat #(recurse-points %))]
    (when p (cons idx (calculate idxs)))))

(let [ans1 (->> points
                (map #(->> (Math/pow 2 (dec %)) long))
                (apply +))
      idxs (reverse (range (count points)))
      ans2 (count (mapcat (fn [idx] (recurse-points idx)) idxs))]
  [ans1 ans2])

;; low 5484