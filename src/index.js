function meetingPlanner(slotsA, slotsB, dur) {
  const res = []
  for (const a of slotsA) {
    for (const b of slotsB) {
      if (b[0] <= a[0] && a[0] + dur <= b[1]) {
        return [a[0], a[0] + dur]
      }
    }
  }

  return null
}

const res = meetingPlanner(
  [[10, 50], [60, 120], [140, 210]],
  [[0, 15], [60, 70]],
  8,
)
console.log(res)
