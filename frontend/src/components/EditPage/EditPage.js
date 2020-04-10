import React from 'react';
import CodeEditor from '../CodeEditor/CodeEditor'
import ModelRenderer from '../ModelRenderer/ModelRenderer';
import { connect } from 'react-redux';
import SideDrawer from '../SideDrawer/SideDrawer';
import NavAppBar from '../NavBar/NavAppBar';
import projectRequests from '../../requests/projectRequests'
require('./EditPage.css')

class EditPage extends React.Component {
  state = { sideDrawerOpen: false, newMessage: false, title: "", code: "" };

  closeDrawer = () => {
    this.setState({ sideDrawerOpen: false, newMessage: false });
  };

  openDrawer = () => {
    this.setState({ sideDrawerOpen: true, newMessage: false });
  };

  onNewMessage = () => {
    this.setState({ newMessage: true });
  };

  onCodeUpdate = (code) => {
    this.setState({ code: code });
  };

  handleSave = () => {
    let permalink = window.location.href;
    
    projectRequests
        .addProject({permalink: permalink, title: this.state.title, code: this.state.code});
  }

    render() {
        return (
            <div className='edit-page'>
                <NavAppBar name="Edit" isEdit="true" open={this.state.sideDrawerOpen} onOpen={this.openDrawer} newMessage={this.state.newMessage} handleSave={this.handleSave}/>
                <main>
                  <CodeEditor onCodeUpdate={this.onCodeUpdate}/>
                  <ModelRenderer />
                </main>
                <SideDrawer open={this.state.sideDrawerOpen} onClose={this.closeDrawer} onNewMessage={this.onNewMessage} />
            </div>
        )
    }

}

export default connect()(EditPage);
