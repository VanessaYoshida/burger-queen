





  // componentDidMount() {
  //   database.collection('users').get()
  //     .then((querySnapshot) => {
  //       const data = querySnapshot.docs.map(doc => doc.data());
  //       this.setState({ listItem: data });
  //     });
  // }





  // handleClick = () => {
  //   const user = {
  //     email: this.state.email,
  //     displayName: this.state.displayName,
  //     lastName: this.state.lastName,
  //     dateOfBirth: this.state.dateOfBirth,
  //     typeUser: this.state.typeUser
  //   }
  //   database.collection('users').add(user)
  //   this.setState({
  //     listItem: this.state.listItem.concat(user)
  //   })
  // }