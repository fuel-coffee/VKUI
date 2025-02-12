Сетка для [Card](#!/Card). Согласно дизайну, высота `Card` должна масштабироваться относительно её ширины. В
примерах это достигается с помощью процентного `padding-bottom`. Пропорции следующие:

- `size="s"`: высота равна 92% ширины;
- `size="m"`: высота равна 62% ширины;
- `size="l"`: высота равна 30% ширины.

## Цифровая доступность (a11y)

- По умолчанию используется тег `"ul"` для повышения доступности компонента. Вы можете прокинуть необходимый вам тег через prop `Component`.
  Ссылки на источники: [статья про доступность карточек](https://inclusive-components.design/cards/).

```jsx
<View activePanel="card">
  <Panel id="card">
    <PanelHeader>CardGrid</PanelHeader>
    <Group description="Внутри Group">
      <CardGrid size="s">
        <Card>
          <div style={{ paddingBottom: '92%' }} />
        </Card>
        <Card>
          <div style={{ paddingBottom: '92%' }} />
        </Card>
        <Card>
          <div style={{ paddingBottom: '92%' }} />
        </Card>
      </CardGrid>
    </Group>
    <CardGrid size="m">
      <Card>
        <div style={{ paddingBottom: '62%' }} />
      </Card>
      <Card>
        <div style={{ paddingBottom: '62%' }} />
      </Card>
    </CardGrid>
    <CardGrid size="l">
      <Card>
        <div style={{ paddingBottom: '30%' }} />
      </Card>
    </CardGrid>
    <CardGrid size="l" padding>
      <Card>
        <div style={{ paddingBottom: '30%' }} />
      </Card>
    </CardGrid>
    <Spacing size={16} />
  </Panel>
</View>
```
