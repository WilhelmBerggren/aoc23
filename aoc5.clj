(ns aoc5 (:require [clojure.string :as str]))

;; seeds: 79 14 55 13
;;
;; seed-to-soil map:
;; 50 98 2
;; 52 50 48
;;
;; [...]

(let [[seed-str & sections] (.split (slurp "5.txt") "\n\n")
      parse-row (fn [row]
                  (map parse-long (str/split row #"\s+")))
      seeds (rest (parse-row seed-str))
      groups (map (fn [section]
                    (let [[name & remaining] (str/split section #"\:\s+")
                          section-rows (map #(.split % "\n") remaining)
                          nums (map (fn [rows]
                                      (map parse-row rows))
                                    section-rows)]
                      nums))
                  sections)
      within-range (fn [num dest-range start-range range-length]
                     (prn [start-range num (+ start-range range-length)])
                     (if (<= start-range num (+ start-range range-length))
                       (+ dest-range (- num start-range ))
                       num))]
  (within-range 79 52 50 48))