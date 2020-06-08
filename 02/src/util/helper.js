const normalized = resources_arrays => {
  const out = resources_arrays.reduce((acc, item) => {
    acc[item._id] = item
    return acc
  }, {})
  return out
}

export {normalized}
