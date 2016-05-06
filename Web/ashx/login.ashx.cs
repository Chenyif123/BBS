using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BBS.BLL;


namespace Web.ashx
{
    /// <summary>
    /// login 的摘要说明
    /// </summary>
    public class login : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            var json = "{'info':'登录失败。','id':-1}";
            string txUsername = context.Request.Form["UserName"];
            string txUserpwd = context.Request.Form["UserPwd"];
            
            context.Response.Write(json);
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}