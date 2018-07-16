export const selectTab = tabId => {
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

export const showtabs = (...tabIds) => {
    const tabsToShow = {}
    tabIds.forEach(e => tabsToShow[e] = true)
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}