(ns aoc1)

(def input (slurp "1.txt"))

(defn parse-line [line]
  (->> line                    ;; asdf1as2df3asdf
       (re-seq #"\d{1}+")      ;; ["1" "2" "3"]
       ((juxt first last))     ;; ["1" "3"]
       (apply str)             ;; "13"
       (parse-long)))          ;; 13

(defn part1 [input]
  (->> (.split input "\n")
       (map parse-line)
       (apply +)))

(defn part2 [input]
  (-> input
      (.replace "zero" "z0o")
      (.replace "one" "o1e")
      (.replace "two" "t2o")
      (.replace "three" "t3e")
      (.replace "four" "f4r")
      (.replace "five" "f5e")
      (.replace "six" "s6x")
      (.replace "seven" "s7n")
      (.replace "eight" "e8t")
      (.replace "nine" "n9e")
      part1))

(part1 (slurp "1.txt"))
(part2 (slurp "1.txt"))
