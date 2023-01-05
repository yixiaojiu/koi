# 小记

## react router 踩坑

**报错：**
导致页面卡死，首屏无法渲染

```
Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.%s
```

**个人猜测：**

`Navigate`源码有一个 useEffect,没有 dependency ,对应报错信息`doesn't have a dependency array`

```ts
React.useEffect(() => {
  if (dataRouterState && dataRouterState.navigation.state !== 'idle') {
    return
  }
  navigate(to, { replace, state, relative })
})
```

**解决：**

由于只需要简单的跳转，所以我自己简单封装了[Navigate](/src/components/navigate/Navigate.tsx)
