package cn.crabc.core.system.entity.vo;

import cn.crabc.core.system.entity.BaseGroup;

import java.util.ArrayList;
import java.util.List;

/**
 * 分组对象
 *
 */
public class BaseGroupVO extends BaseGroup {

    private List<BaseGroup> children = new ArrayList<>();

    private List<ApiComboBoxVO> apis = new ArrayList<>();

    public List<BaseGroup> getChildren() {
        return children;
    }

    public void setChildren(List<BaseGroup> children) {
        this.children = children;
    }

    public List<ApiComboBoxVO> getApis() {
        return apis;
    }

    public void setApis(List<ApiComboBoxVO> apis) {
        this.apis = apis;
    }
}