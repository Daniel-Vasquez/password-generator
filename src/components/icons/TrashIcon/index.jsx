export const TrashIcon = ({ className, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m3 3 18 18M18 6l-.4 6m-.35 5.253-.05.76c-.071 1.052-.106 1.578-.333 1.977a2 2 0 0 1-.866.81c-.413.2-.94.2-1.995.2H9.994c-1.055 0-1.582 0-1.995-.2a2 2 0 0 1-.866-.81c-.227-.399-.262-.925-.332-1.977L6 6H4m12 0-.544-1.632A2 2 0 0 0 13.559 3h-3.117c-.5 0-.966.185-1.323.5M11.613 6H20m-6 8v3m-4-7v7"
      />
    </svg>
  )
}
