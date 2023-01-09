interface Props {
  iconName: string
  className?: string
  size?: 'large' | 'normal'
}

export const Icon = (props: Props) => (
  <div
    className={`${props.iconName} ${props.size === 'large' ? 'w-8 h-8' : 'w-6 h-6'} ${
      props.className ? props.className : ''
    }`}
  ></div>
)
