(ns aoc3)

(def neighbours [[-1 -1] [-1 0] [-1 1]
                 [ 0 -1]        [ 0 1]
                 [ 1 -1] [ 1 0] [ 1 1]])

(def lines (.split (slurp "3.txt") "\n"))

(comment
  (map (fn [line]
         (map-indexed
          (fn [idx c]
            (let [adjacent (map (fn [[x y]]
                                  (get-in
                                   lines
                                   [(+ x idx)
                                    (+ y idx)]))
                                neighbours)]
              c))
          line))
       lines))
