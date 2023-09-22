const getListItemClassByCategory = (category) => {
    if (!category) return ''
    return `summary__list-item--${category.toLowerCase()}`
}

fetch('data.json')
    .then((res) => res.json())
    .then(categories => {
        const list = document.getElementById('list')
        categories.forEach((el) => {
            const item = document.createElement('li')
            item.classList.add('summary__list-item')
            const categoryItemClass = getListItemClassByCategory(el.category)
            item.classList.add(categoryItemClass)

            const img = document.createElement('img')
            img.src = el.icon
            img.alt = el.category
            item.append(img)

            item.append(el.category)

            const score = document.createElement('span')
            score.textContent = el.score
            score.classList.add('summary__item-score')
            item.append(score)

            const maxScore = document.createElement('span')
            maxScore.classList.add('summary__item-max-score')
            maxScore.textContent = '/ 100'
            item.append(maxScore)
            list.append(item)
        })

    })

