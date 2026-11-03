// campo de formulario com label e mensagem de erro
function Input({ label, name, erro, textarea = false, ...props }) {
  const classes = `w-full rounded-lg border px-4.5 py-3.5 outline-none transition-colors focus:border-primary ${
    erro ? 'border-red-500' : 'border-line'
  }`

  return (
    <div className="flex-1">
      <label htmlFor={name} className="mb-2 block text-[0.95rem] font-medium text-muted">
        {label}
      </label>

      {textarea ? (
        <textarea id={name} name={name} className={`${classes} h-[150px] resize-y`} {...props} />
      ) : (
        <input id={name} name={name} className={classes} {...props} />
      )}

      {erro && <p className="mt-1.5 text-sm text-red-600">{erro}</p>}
    </div>
  )
}

export default Input
