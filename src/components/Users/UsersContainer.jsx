import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage,      
     toggleFollowingProgress, getUsers } from '../../Redux/UsersReducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';

class UsersContainer extends React.Component {

    componentDidMount() {
       /*  this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });  */
        this.props.getUsers(this.props.currentPage, this.props.pageSize);        
    }

    onPageChanged = (pageNumber) => {
       /*  this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        }) */
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

/* let withRedirect = withAuthRedirect(UsersContainer)

export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        setCurrentPage,
        getUsers
    })(withRedirect);
 */


let withRedirect = withAuthRedirect(UsersContainer)

export default withAuthRedirect(connect(mapStateToProps,
    {
        follow,
        unfollow,
        setCurrentPage,
        getUsers
    })(withRedirect));
