function meetingPlanner(slotsA, slotsB, dur) {
  const getMeetingPlanner = ([firstA, ...restA], [firstB, ...restB]) => {
    if (restA.length === 0 && restB.length === 0) {
      return null
    }
    const start = Math.max(firstA[0], firstB[0])
    const end = Math.min(firstA[1], firstB[1])
    if (start + dur < end) {
      return [start, start + dur]
    }
    if (firstA[1] < firstB[1]) {
      return getMeetingPlanner(restA, [firstB, ...restB])
    }
    return getMeetingPlanner([firstA, ...restA], [...restB])
  }

  return getMeetingPlanner(slotsA, slotsB)
}

const res = meetingPlanner(
  [[10, 50], [60, 120], [140, 210]],
  [[0, 15], [60, 70]],
  8,
)
console.log(res)

function procedureSolution(slotsA, slotsB, dur) {
  let ia = 0
  let ib = 0
  while (ia < slotsA.length && ib < slotsB.length) {
    const start = Math.max(slotsA[ia][0], slotsB[ib][0])
    const end = Math.min(slotsA[ia][1], slotsB[ib][1])

    if (start + dur <= end) {
      return [start, start + dur]
    }

    if (slotsA[ia][1] < slotsB[ib][1]) {
      ia++
    } else {
      ib++
    }
  }

  return null
}
