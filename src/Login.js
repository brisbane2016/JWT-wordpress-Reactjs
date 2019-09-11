 const loginInformation = () => {

    const login = {

        token : localStorage.getItem( 'token' ),
        username:localStorage.getItem( 'userName' )
    }

	return login;
}

export default loginInformation;