document.write("<script language=javascript src='/assets/js/config.js?v=318'></script>");

/////////////////////////////////////////////////////////////Common相关的URL/////////////////////////////////////////////////////////////////////////////////
//根据用户名称获取菜单按钮权限
function getMenuAndButtonAuthoritiesUrl() {
    var getMenuAndButtonAuthoritiesApi = getUrl() + "common/getMenuAndButtonAuthorities";
    return getMenuAndButtonAuthoritiesApi;
}
/////////////////////////////////////////////////////////////机械编号相关的URL/////////////////////////////////////////////////////////////////////////////////
//添加机械图纸编号规则的产品系列代号的URL
function addMechanicsProductCodeUrl() {
    var addMechanicsProductCodeApi = getUrl() + "mechanics/addMechanicsProductCode";
    return addMechanicsProductCodeApi;
}

//获取机械图纸编号规则产品系列代号
function getAllMechanicsProductCodesUrl() {
    var getAllMechanicsProductCodesApi = getUrl() + "mechanics/getAllMechanicsProductCodes";
    return getAllMechanicsProductCodesApi;
}

//更新机械图纸编号规则产品系列代号
function updateMechanicsProductCodeUrl() {
    var updateMechanicsProductCodeApi = getUrl() + "mechanics/updateMechanicsProductCode";
    return updateMechanicsProductCodeApi;
}

//删除机械图纸编号规则产品系列代号
function deleteMechanicsProductCodeUrl() {
    var deleteMechanicsProductCodeApi = getUrl() + "mechanics/deleteMechanicsProductCode";
    return deleteMechanicsProductCodeApi;
}

//添加机械图纸编号规则的产品系列版本代号
function addMechanicsProductCodeVersionUrl() {
    var addMechanicsProductCodeVersionApi = getUrl() + "mechanics/addMechanicsProductCodeVersion";
    return addMechanicsProductCodeVersionApi;
}

//获取机械图纸编号规则产品系列版本代号
function getAllMechanicsProductCodeVersionUrl() {
    var getAllMechanicsProductCodeVersionApi = getUrl() + "mechanics/getAllMechanicsProductCodeVersion";
    return getAllMechanicsProductCodeVersionApi;
}

//更新机械图纸编号规则的产品系列版本代号
function updateMechanicsProductCodeVersionUrl() {
    var updateMechanicsProductCodeVersionApi = getUrl() + "mechanics/updateMechanicsProductCodeVersion";
    return updateMechanicsProductCodeVersionApi;
}

//删除机械图纸编号规则的产品系列版本代号
function deleteMechanicsProductCodeVersionUrl() {
    var deleteMechanicsProductCodeVersionApi = getUrl() + "mechanics/deleteMechanicsProductCodeVersion";
    return deleteMechanicsProductCodeVersionApi;
}
//添加机械图纸编号规则的零件类型
function addMechanicsPartTypeUrl() {
    var addMechanicsPartTypeApi = getUrl() + "mechanics/addMechanicsPartType";
    return addMechanicsPartTypeApi;
}
//获取机械图纸编号规则零件类型
function getAllMechanicsPartTypesUrl() {
    var getAllMechanicsPartTypesApi = getUrl() + "mechanics/getAllMechanicsPartTypes";
    return getAllMechanicsPartTypesApi;
}
//更新机械图纸编号规则的零件类型
function updateMechanicsPartTypeUrl() {
    var updateMechanicsPartTypeApi = getUrl() + "mechanics/updateMechanicsPartType";
    return updateMechanicsPartTypeApi;
}
//添加机械图纸编号规则的初始值
function addMechanicsPartMaxValueUrl() {
    var addMechanicsPartMaxValueApi = getUrl() + "mechanics/addMechanicsPartMaxValue";
    return addMechanicsPartMaxValueApi;
}
//生成机械图纸编号规则
function addMechanicsDrawingCodeUrl() {
    var addMechanicsDrawingCodeApi = getUrl() + "mechanics/addMechanicsDrawingCode";
    return addMechanicsDrawingCodeApi;
}
//获取机械图纸编号规则零件类型
function getAllMechanicsDrawingCodesUrl() {
    var getAllMechanicsDrawingCodesApi = getUrl() + "mechanics/getAllMechanicsDrawingCodes";
    return getAllMechanicsDrawingCodesApi;
}
//上传机械编号规则
function uploadMechanicsFileUrl() {
    var uploadMechanicsFileApi = getUrl() + "mechanics/uploadMechanicsFile";
    return uploadMechanicsFileApi;
}
//预览PDF电路编号规则
function downloadMechanicsFileUrl() {
    var downloadMechanicsFileApi = getUrl() + "mechanics/downloadMechanicsFile/";
    return downloadMechanicsFileApi;
}
//下载机械编号规则压缩文件
function downloadMechanicsZipFileUrl() {
    var downloadMechanicsZipFileApi = getUrl() + "mechanics/downloadMechanicsZipFile/";
    return downloadMechanicsZipFileApi;
}
//更新机械图纸编号规则
function updateMechanicsDrawingCodeUrl() {
    var updateMechanicsDrawingCodeApi = getUrl() + "/mechanics/updateMechanicsDrawingCode";
    return updateMechanicsDrawingCodeApi;
}
//机械图纸研发编号转化为正式编码规则
function transferredMechanicsDrawingCodeUrl() {
    var transferredMechanicsDrawingCodeApi = getUrl() + "/mechanics/transferredMechanicsDrawingCode";
    return transferredMechanicsDrawingCodeApi;
}
//查询机械图纸正式编号规则
function getAllMechanicsFormalDrawingCodesUrl() {
    var getAllMechanicsFormalDrawingCodesApi = getUrl() + "/mechanics/getAllMechanicsFormalDrawingCodes";
    return getAllMechanicsFormalDrawingCodesApi;
}
//更新机械图纸正式编号规则有效无效
function updateMechanicsFormalDrawingCodesUrl() {
    var updateMechanicsFormalDrawingCodesApi = getUrl() + "/mechanics/updateMechanicsFormalDrawingCodes";
    return updateMechanicsFormalDrawingCodesApi;
}
/////////////////////////////////////////////////////////////用户相关的URL/////////////////////////////////////////////////////////////////////////////////
//获取所有用户的URL
function getAllUserUrl() {
    var getAllUserApi = getUrl() + "user/getAllUser";
    return getAllUserApi;
}

//根据用户ID删除用户信息
function deleteUserByIdUrl() {
    var deleteUserByIdApi = getUrl() + "user/deleteUser";
    return deleteUserByIdApi;
}

//添加用户信息
function addUserUrl() {
    var addUserApi = getUrl() + "user/addUser";
    return addUserApi;
}

//获取部门岗位信息
function getAllDepartmentAndPostUrl() {
    var getAllDepartmentAndPostApi = getUrl() + "user/getAllDepartmentAndPost";
    return getAllDepartmentAndPostApi;
}

//更新用户信息
function updateUserUrl() {
    var updateUserApi = getUrl() + "user/updateUser";
    return updateUserApi;
}

//分配角色
function assignRolesUrl() {
    var assignRolesApi = getUrl() + "user/assignRoles";
    return assignRolesApi;
}

//获取用户的角色
function getUserRoleUrl() {
    var getUserRoleApi = getUrl() + "user/getUserRole";
    return getUserRoleApi;
}

//根据角色名称获取用户信息
function getUserByRoleNameUrl(name) {
    var getUserByRoleNameApi = getUrl() + "user/getUserByRoleName/" + name;
    return getUserByRoleNameApi;
}

/////////////////////////////////////////////////////////////用户角色相关的URL/////////////////////////////////////////////////////////////////////////////////
//获取角色
function getAllRoleUrl() {
    var getAllRoleApi = getUrl() + "role/getAllRole";
    return getAllRoleApi;
}

//添加角色
function addRoleUrl() {
    var addRoleApi = getUrl() + "role/addRole";
    return addRoleApi;
}

//根据角色ID删除角色
function deleteRoleByIdUrl() {
    var deleteRoleByIdApi = getUrl() + "role/deleteRoleById";
    return deleteRoleByIdApi;
}

//根据角色ID更新角色信息
function updateRoleUrl() {
    var updateRoleApi = getUrl() + "role/updateRole";
    return updateRoleApi;
}

//配置角色权限
function assignPermissionsUrl() {
    var assignPermissionsApi = getUrl() + "role/assignPermissions";
    return assignPermissionsApi;
}

//配置角色权限
function assignAuthoritiesUrl() {
    var assignAuthoritiesApi = getUrl() + "role/assignAuthorities";
    return assignAuthoritiesApi;
}


//获取角色权限
function getRolePremissionUrl() {
    var getRolePremissionApi = getUrl() + "role/getRolePremission";
    return getRolePremissionApi;
}

//根据角色ID获取角色权限
function getRoleAuthoritiesUrl() {
    var getRoleAuthoritiesApi = getUrl() + "role/getRoleAuthorities";
    return getRoleAuthoritiesApi;
}

/////////////////////////////////////////////////////////////权限相关的URL/////////////////////////////////////////////////////////////////////////////////
//获取所有的权限
function getAllPermissionUrl() {
    var getAllPermissionApi = getUrl() + "permission/getAllPermission";
    return getAllPermissionApi;
}

//获取所有的权限
function getAllAuthoritiesUrl() {
    var getAllAuthoritiesApi = getUrl() + "authority/getAllAuthorities";
    return getAllAuthoritiesApi;
}

//添加权限
function addAuthorityUrl() {
    var addAuthorityApi = getUrl() + "authority/addAuthority";
    return addAuthorityApi;
}

//更新权限
function updateAuthorityByIdUrl() {
    var updateAuthorityByIdApi = getUrl() + "authority/updateAuthorityById";
    return updateAuthorityByIdApi;
}

//删除权限
function deleteAuthoritiesByIdsUrl() {
    var deleteAuthoritiesByIdsApi = getUrl() + "authority/deleteAuthoritiesByIds";
    return deleteAuthoritiesByIdsApi;
}

/////////////////////////////////////////////////////////////客户相关的URL/////////////////////////////////////////////////////////////////////////////////
//获取客户地理信息
function getCustomerLocationMsgUrl() {
    var getCustomerLocationMsgApi = getUrl() + "customer/getCustomerLocationMsg";
    return getCustomerLocationMsgApi;
}

//获取客户信息填充表格
function getAllCustomerLocationMsgForTableUrl() {
    var getAllCustomerLocationMsgForTableApi = getUrl() + "customer/getAllCustomerLocationMsgForTable";
    return getAllCustomerLocationMsgForTableApi;
}

//删除客户信息
function deleteCustomerUrl() {
    var deleteCustomerApi = getUrl() + "customer/deleteCustomer";
    return deleteCustomerApi;
}

//录入客户信息
function inputCustomerLocationMsgUrl() {
    var inputCustomerLocationMsgApi = getUrl() + "customer/location/msg/input";
    return inputCustomerLocationMsgApi;
}

//更新客户信息
function updateCustomerUrl() {
    var updateCustomerApi = getUrl() + "customer/updateCustomer";
    return updateCustomerApi;
}
/////////////////////////////////////////////////////////////产品线管理相关的URL/////////////////////////////////////////////////////////////////////////////////
//查看所有的产品线信息
function getAllProductLineUrl() {
    var getAllProductLineApi = getUrl() + "productLine/getAllProductLine";
    return getAllProductLineApi;
}
//查询产品线信息
function getProductLineDetailsUrl() {
    var getProductLineDetailsApi = getUrl() + "productLine/getProductLineDetailsById";
    return getProductLineDetailsApi;
}
//添加产品线信息
function addProductLineUrl() {
    var addProductLineApi = getUrl() + "productLine/addProductLine";
    return addProductLineApi;
}

//更新产品线信息
function updateProductLineUrl() {
    var updateProductLineApi = getUrl() + "productLine/updateProductLine";
    return updateProductLineApi;
}

//删除产品线信息
function deleteProductLineUrl() {
    var deleteProductLineApi = getUrl() + "productLine/deleteProductLine";
    return deleteProductLineApi;
}
/////////////////////////////////////////////////////////////产品相关的URL/////////////////////////////////////////////////////////////////////////////////
//获取设备类型
function getAllEquipmentUrl() {
    var getAllEquipmentApi = getUrl() + "product/getAllEquipment";
    return getAllEquipmentApi;
}

//根据客户id获取产品信息
function getProductsByCustomerIdUrl(customerId) {
    var getProductsByCustomerIdApi = getUrl() + "product/getProductsByCustomerId/" + customerId;
    return getProductsByCustomerIdApi;
}

//根据产品id获取产品信息
function getProductsByProductIdUrl(productId) {
    var getProductsByProductIdApi = getUrl() + "product/getProductsByProductId/" + productId;
    return getProductsByProductIdApi;
}

//绑定客户产品关系
function assignProductsUrl(customerId, operatorId) {
    var assignProductsApi = getUrl() + "product/assignProducts/" + customerId + "/" + operatorId;
    return assignProductsApi;
}

//根据客户id获取产品信息
function getCustomerProductUrl(customerId) {
    var getCustomerProductApi = getUrl() + "product/getCustomerProduct/" + customerId;
    return getCustomerProductApi;
}

//获取所有的产品信息
function getAllProductUrl() {
    var getAllProductApi = getUrl() + "product/getAllProduct";
    return getAllProductApi;
}
//初始化产品信息
function getAllProductByName() {
    var getAllProductApi = getUrl() + "product/getAllProductByName";
    return getAllProductApi;
}
//查询获取所有的产品信息
function getProductsUrl() {
    var getAllProductApi = getUrl() + "product/getProducts";
    return getAllProductApi;
}

//删除产品信息
function deleteProductUrl() {
    var deleteProductApi = getUrl() + "product/deleteProduct";
    return deleteProductApi;
}

//添加产品信息
function addProductUrl() {
    var addProductApi = getUrl() + "product/addProduct";
    return addProductApi;
}
//获取设备类型和产品系列
function getAllEquipmentAndProductModelUrl() {
    var getAllEquipmentAndProductModelApi = getUrl() + "product/getAllEquipmentAndProductModel";
    return getAllEquipmentAndProductModelApi;
}

//更新产品信息
function updateProductUrl() {
    var updateProductApi = getUrl() + "product/updateProduct";
    return updateProductApi;
}

/////////////////////////////////////////////////////////////售后服务相关的URL/////////////////////////////////////////////////////////////////////////////////
//查询售后服务的信息
function selectAfterSalesInformationUrl() {
    var selectAfterSalesInformationApi = getUrl() + "afterSale/selectAfterSalesInformation";
    return selectAfterSalesInformationApi;
}

//初始化服务主题
function initAfterSalesInformationUrl() {
    var initAfterSalesInformationApi = getUrl() + "afterSale/initAfterSalesInformation";
    return initAfterSalesInformationApi;
}

//初始化服务主分类
function initServiceCategoryUrl() {
    var initServiceCategoryApi = getUrl() + "afterSale/initServiceCategory";
    return initServiceCategoryApi;
}

//初始化服务处理状态
function initProcessingStatusUrl() {
    var initProcessingStatusApi = getUrl() + "afterSale/processingStatus";
    return initProcessingStatusApi;
}

//初始化服务客户列表
function initAfterSalesCustomersUrl() {
    var initAfterSalesCustomersApi = getUrl() + "afterSale/afterSalesCustomers";
    return initAfterSalesCustomersApi;
}

//删除售后信息
function deleteAfterSalesUrl() {
    var deleteAfterSalesApi = getUrl() + "afterSale/deleteAfterSales";
    return deleteAfterSalesApi;
}

//添加售后信息
function addAfterSalesUrl() {
    var addAfterSalesApi = getUrl() + "afterSale/addAfterSales";
    return addAfterSalesApi;
}
// 添加开始售后信息
function startAfterSales() {
    var startAfterSalesApi = getUrl() + "afterSale/startAfterSales";
    return startAfterSalesApi;
}
// 添加结束售后信息
function endAfterSalesUrl() {
    var endAfterSalesApi = getUrl() + "afterSale/endAfterSales";
    return endAfterSalesApi;
}
// 编辑售后服务信息
function editAfterSalesServiceUrl() {
    var editAfterSalesServiceApi = getUrl() + "/afterSale/editAfterSalesService";
    return editAfterSalesServiceApi;
}
//编辑更新售后信息
function modifyServiceUrl() {
    var modifyServiceApi = getUrl() + "afterSale/modifyService";
    return modifyServiceApi;
}

/////////////////////////////////////////////////////////////日志相关的URL/////////////////////////////////////////////////////////////////////////////////
//获取日志信息
function getLogMsgUrl() {
    var getLogMsgApi = getUrl() + "log/getLogMsg";
    return getLogMsgApi;
}

//更新日志审核状态
function updateStatusUrl() {
    var updateStatusApi = getUrl() + "log/updateStatus";
    return updateStatusApi;
}

/////////////////////////////////////////////////////////////销售相关的URL/////////////////////////////////////////////////////////////////////////////////
//获取销售签到信息
function getSignMsgUrl() {
    var getSignMsgApi = getUrl() + "sale/getSignMsg";
    return getSignMsgApi;
}

//获取销售任务
function getTaskUrl() {
    var getTaskApi = getUrl() + "sale/getTask";
    return getTaskApi;
}

//删除销售任务
function deleteTaskUrl() {
    var deleteTaskApi = getUrl() + "sale/deleteTask";
    return deleteTaskApi;
}

////////////////////////////////////////////////////////////知识库相关的URL/////////////////////////////////////////////////////////////////////////////////
//查询牌号库
function selectBrandUrl() {
    var selectBrandApi = getUrl() + "knowledge/selectBrand";
    return selectBrandApi;
}

//上传文件
function uploadFileUrl() {
    var uploadFileApi = getUrl() + "knowledge/uploadFile";
    return uploadFileApi;
}

//上传文件
function uploadUrl() {
    var uploadApi = getUrl() + "knowledge/upload";
    return uploadApi;
}

//上传样品文件
function sampleUploadUrl() {
    var sampleUploadApi = getUrl() + "knowledge/sampleUpload";
    return sampleUploadApi;
}

//上传牌号text文件
function brandUploadTextUrl() {
    var brandUploadTextApi = getUrl() + "knowledge/brandUploadText";
    return brandUploadTextApi;
}

//上传牌号text文件
function sampleUploadTextUrl() {
    var sampleUploadTextApi = getUrl() + "knowledge/sampleUploadText";
    return sampleUploadTextApi;
}

//初始化国标编号
function initCountryStandardUrl() {
    var initCountryStandardApi = getUrl() + "knowledge/initCountryStandard";
    return initCountryStandardApi;
}

//添加牌号
function addBrandUrl() {
    var addBrandApi = getUrl() + "knowledge/addBrand";
    return addBrandApi;
}

//更新牌号
function updateBrandUrl() {
    var updateBrandApi = getUrl() + "knowledge/updateBrand";
    return updateBrandApi;
}

//下载文件
function fileDownloadUrl() {
    var fileDownloadApi = getUrl() + "knowledge/fileDownload";
    return fileDownloadApi;
}

//查询国标
function selectCountryStandardUrl() {
    var selectCountryStandardApi = getUrl() + "knowledge/selectCountryStandard";
    return selectCountryStandardApi;
}

//删除国标
function deleteCountryStandardUrl() {
    var deleteCountryStandardApi = getUrl() + "knowledge/deleteCountryStandard";
    return deleteCountryStandardApi;
}

//添加国标
function addCountryStandardUrl() {
    var addCountryStandardApi = getUrl() + "knowledge/addCountryStandard";
    return addCountryStandardApi;
}

//更新国标
function updateCountryStandardUrl() {
    var updateCountryStandardApi = getUrl() + "knowledge/updateCountryStandard";
    return updateCountryStandardApi;
}

//添加样品
function addSampleUrl() {
    var addSampleApi = getUrl() + "knowledge/addSample";
    return addSampleApi;
}

//初始化国别
function initCountryUrl() {
    var initCountryApi = getUrl() + "knowledge/initCountry";
    return initCountryApi;
}

//初始化样品类型
function initSampleTypeUrl() {
    var initSampleTypeApi = getUrl() + "knowledge/initSampleType";
    return initSampleTypeApi;
}

//初始化证书信息
function initCertificateUrl() {
    var initCertificateApi = getUrl() + "knowledge/initCertificate";
    return initCertificateApi;
}

//初始化制造商信息
function initManufacturerUrl() {
    var initManufacturerApi = getUrl() + "knowledge/initManufacturer";
    return initManufacturerApi;
}

//初始化样品状态
function initSampleStatusUrl() {
    var initSampleStatusApi = getUrl() + "knowledge/initSampleStatus";
    return initSampleStatusApi;
}

//初始化样品单点或套标信息
function initSampleUnitUrl() {
    var initSampleUnitApi = getUrl() + "knowledge/initSampleUnit";
    return initSampleUnitApi;
}

//初始化销售说明信息
function initSaleInfoUrl() {
    var initSaleInfoApi = getUrl() + "knowledge/initSaleInfo";
    return initSaleInfoApi;
}

//初始化牌号信息
function initBrandUrl() {
    var initBrandApi = getUrl() + "knowledge/initBrand";
    return initBrandApi;
}

//查询样品信息
function selectSampleUrl() {
    var selectSampleApi = getUrl() + "knowledge/selectSample";
    return selectSampleApi;
}

//更新样品信息
function updateSampleUrl() {
    var updateSampleApi = getUrl() + "knowledge/updateSample";
    return updateSampleApi;
}
////////////////////////////////////////////////////////////报销管理/////////////////////////////////////////////////////////////////////////////////

//图片预览
function fileUrl() {
    var fileApi = getUrl() + "finance/fileDownload";
    return fileApi;
}
//查询个人报销
function getReimbursementUrl() {
    var getReimbursementApi = getUrl() + "finance/getReimbursement";
    return getReimbursementApi;
}
//获取报销人员信息
function getUserByIdUrl() {
    var getUserByIdApi = getUrl() + "user/getUserById";
    return getUserByIdApi;
}
//添加报销发票
function getInvoicesByReimbursementIdUrl() {
    var getInvoicesByReimbursementIdApi = getUrl() + "finance/getInvoicesByReimbursementId";
    return getInvoicesByReimbursementIdApi;
}
////////////////////////////////////////////////////////////销售管理/////////////////////////////////////////////////////////////////////////////////


//客户来源初始化
function customerSourceUrl() {
    var customerSourceApi = getUrl() + "sale/customerSource";
    return customerSourceApi;
}
//查询报备信息
function findReportUrl() {
    var findReportApi = getUrl() + "sale/findReport";
    return findReportApi;
}
////////////////////////////////////////////////////////////电路编号规则/////////////////////////////////////////////////////////////////////////////////
//添加电路编号初始值的URL
function addHardwareCircuitBoardMaxValueUrl() {
    var addHardwareCircuitBoardMaxValueApi = getUrl() + "hardwareCircuitBoard/addHardwareCircuitBoardMaxValue";
    return addHardwareCircuitBoardMaxValueApi;
}

//生成电路编号规则
function addHardwareCircuitBoardDrawingCodeUrl() {
    var addHardwareCircuitBoardDrawingCodeApi = getUrl() + "hardwareCircuitBoard/addHardwareCircuitBoardDrawingCode";
    return addHardwareCircuitBoardDrawingCodeApi;
}

//查询电路编号规则
function getAllHardwareCircuitBoardDrawingCodesUrl() {
    var getAllHardwareCircuitBoardDrawingCodesApi = getUrl() + "hardwareCircuitBoard/getAllHardwareCircuitBoardDrawingCodes";
    return getAllHardwareCircuitBoardDrawingCodesApi;
}

//更新电路编号规则
function updateHardwareCircuitBoardDrawingCodeUrl() {
    var updateHardwareCircuitBoardDrawingCodeApi = getUrl() + "hardwareCircuitBoard/updateHardwareCircuitBoardDrawingCode";
    return updateHardwareCircuitBoardDrawingCodeApi;
}

//上传电路编号规则
function auploadHardwareCircuitBoardFileUrl() {
    var uploadHardwareCircuitBoardFileApi = getUrl() + "hardwareCircuitBoard/uploadHardwareCircuitBoardFile";
    return uploadHardwareCircuitBoardFileApi;
}
//预览PDF电路编号规则
function downloadHardwareCircuitBoardFileUrl() {
    var downloadHardwareCircuitBoardFileApi = getUrl() + "hardwareCircuitBoard/downloadHardwareCircuitBoardFile/";
    return downloadHardwareCircuitBoardFileApi;
}
//下载压缩包电路编号规则
function downloadHardwareCircuitBoardZipFileUrl() {
    var downloadHardwareCircuitBoardZipFileApi = getUrl() + "hardwareCircuitBoard/downloadHardwareCircuitBoardZipFile/";
    return downloadHardwareCircuitBoardZipFileApi;
}
//历史记录查询电路编号规则
function getAllHardwareCircuitBoardDrawingCodesHistoryUrl() {
    var getAllHardwareCircuitBoardDrawingCodesHistoryApi = getUrl() + "hardwareCircuitBoard/getAllHardwareCircuitBoardDrawingCodesHistory";
    return getAllHardwareCircuitBoardDrawingCodesHistoryApi;
}
////////////////////////////////////////////////////////////软件的版本号/////////////////////////////////////////////////////////////////////////////////
//添加软件的版本号
function addSoftwareVersionUrl() {
    var addSoftwareVersionApi = getUrl() + "/softwareVersionManage/addSoftwareVersion";
    return addSoftwareVersionApi;
}

//查询软件的版本号
function getAllSoftwareVersionUrl() {
    var getAllSoftwareVersionApi = getUrl() + "/softwareVersionManage/getAllSoftwareVersion";
    return getAllSoftwareVersionApi;
}

//更新软件的版本号
function updateSoftwareVersionAncillaryInformationUrl() {
    var updateSoftwareVersionAncillaryInformationApi = getUrl() + "/softwareVersionManage/updateSoftwareVersionAncillaryInformation";
    return updateSoftwareVersionAncillaryInformationApi;
}
//有效无效性 
function updateSoftwareVersionValidUrl() {
    var updateSoftwareVersionValidApi = getUrl() + "/softwareVersionManage/updateSoftwareVersionValid";
    return updateSoftwareVersionValidApi;
}
//升级软件版本号
function upgradeSoftwareVersionUrl() {
    var upgradeSoftwareVersionApi = getUrl() + "/softwareVersionManage/upgradeSoftwareVersion";
    return upgradeSoftwareVersionApi;
}
//上传软件版本号代码压缩包
function uploadSoftwareFileUrl() {
    var uploadSoftwareFileApi = getUrl() + "/softwareVersionManage/uploadSoftwareFile";
    return uploadSoftwareFileApi;
}
//下载压缩包
function downloadSoftwareFileUrl() {
    var downloadSoftwareFileApi = getUrl() + "/softwareVersionManage/downloadSoftwareFile/";
    return downloadSoftwareFileApi;
}
// 初始化产品系列
function getAllProductSeriesUrl() {
    var getAllProductSeriesApi = getUrl() + "/productLine/getAllProductSeries";
    return getAllProductSeriesApi;
}
// 删除软件的版本号
function deleteSoftwareVersionUrl() {
    var deleteSoftwareVersionApi = getUrl() + "/softwareVersionManage/deleteSoftwareVersion";
    return deleteSoftwareVersionApi;
}