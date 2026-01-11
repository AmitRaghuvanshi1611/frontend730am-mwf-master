function Hello() {
  return (
    <>
      <div className="hello-component">
        <h1 style={{ color: 'blue', border: '1px solid blue' }}>Login</h1>
        <hr/>

        <form>
            <div>
                <label htmlFor="username">Username:</label> 
                <input type="text" id="username" name="username" />
            </div> <br/>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
            </div>
            <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}
export default Hello