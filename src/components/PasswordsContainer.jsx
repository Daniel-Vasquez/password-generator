import { CopyIcon } from "./icons/CopyIcon"
import { TrashIcon } from "./icons/TrashIcon"

export const PasswordsContainer = ({ passwords, deletedPassword, handleCopy, textRef }) => {
  return (
    <ul>
      {passwords.map(({ password, name, id }, index) => (
        <li
          className="flex w-full gap-2 justify-center text-white p-2 rounded-md text-center"
          key={id}
        >
          <p className="text-yellow-500 font-bold">{name}:</p>
          <div className="flex items-center gap-2">
            <p ref={
              element => textRef.current[index] = element || ''
            }>
              {password}
            </p>
            <button onClick={() => handleCopy(index)}>
              <CopyIcon className="w-7 h-7 text-white hover:text-yellow-500" />
            </button>
            <button onClick={() => deletedPassword(id)}>
              <TrashIcon className="w-6 h-6 text-transparent" color="red" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}
