import React from 'react';

import { connect } from 'react-redux';

import { withRouter } from './CustomWithPouter';

import { Profile } from 'components/Profile/Profile';
import { ProfileInfoType } from 'redux/reducers/profileReducer/types';
import { AppStateType } from 'redux/store/reduxStore';
import {
  getStatusTC,
  getUserProfileTC,
  savePhotoTC,
  updateStatusTC,
} from 'redux/thunks/profileThunks/profileThunks';

const defaulUserId = 22152;
class ProfileContainer extends React.Component<any> {
  componentDidMount(): any {
    // eslint-disable-next-line react/destructuring-assignment
    let { userId } = this.props.params;
    if (!userId) {
      userId = defaulUserId;
    }

    // eslint-disable-next-line react/destructuring-assignment
    this.props.getUserProfileTC(userId);
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getStatusTC(userId);
  }

  render(): any {
    // eslint-disable-next-line react/destructuring-assignment,react/jsx-props-no-spreading
    return <Profile profile={this.props.profile} />;
  }
}

export type MapStatePropsType = {
  profile: ProfileInfoType;
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  profile: state.profileReducer.profileInfo,
});

export default connect(mapStateToProps, {
  savePhotoTC,
  getStatusTC,
  updateStatusTC,
  getUserProfileTC,
})(withRouter(ProfileContainer));
